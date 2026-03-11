import html.parser
import pathlib
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]


class AssetLinkParser(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.local_refs = []

    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key not in {"href", "src"} or not value:
                continue
            if value.startswith(("http://", "https://", "mailto:", "#")):
                continue
            self.local_refs.append(value)


class RepositoryValidationTests(unittest.TestCase):
    def test_expected_files_exist(self):
        required_paths = [
            ROOT / "README.md",
            ROOT / "index.html",
            ROOT / "assets" / "styles.css",
            ROOT / "assets" / "app.js",
            ROOT / "The Pythonic Odyssey.pdf",
            ROOT / "Python for CyberSecurity.pdf",
            ROOT / ".github" / "workflows" / "python-ci.yml",
            ROOT / ".github" / "workflows" / "pages.yml",
            ROOT / "CONTRIBUTING.md",
            ROOT / "SECURITY.md",
        ]

        missing = [str(path.relative_to(ROOT)) for path in required_paths if not path.exists()]
        self.assertEqual(missing, [], f"Missing required files: {missing}")

    def test_readme_covers_both_notebooks(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        expected_phrases = [
            "The Pythonic Odyssey",
            "Python for CyberSecurity",
            "Who This Repository Is For",
            "How to Use This Repository",
            "GitHub Pages",
        ]

        for phrase in expected_phrases:
            with self.subTest(phrase=phrase):
                self.assertIn(phrase, readme)

    def test_index_references_existing_local_assets(self):
        index_path = ROOT / "index.html"
        parser = AssetLinkParser()
        parser.feed(index_path.read_text(encoding="utf-8"))

        missing = []
        for relative_ref in parser.local_refs:
            candidate = (ROOT / relative_ref.replace("%20", " ")).resolve()
            if not candidate.exists():
                missing.append(relative_ref)

        self.assertEqual(missing, [], f"Broken local references: {missing}")


if __name__ == "__main__":
    unittest.main()