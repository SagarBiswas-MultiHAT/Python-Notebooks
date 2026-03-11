# Contributing

Thank you for improving this repository.

## Scope

This project is a learning resource built around two downloadable PDF notebooks:

- The Pythonic Odyssey
- Python for CyberSecurity

Contributions should keep the repository focused on explaining, presenting, and validating those learning materials.

## Good Contributions

- Clarify the README or website copy.
- Fix broken links or asset references.
- Improve GitHub Pages presentation.
- Strengthen repository validation tests.
- Add safe, ethical guidance around cybersecurity learning material.

## Please Avoid

- Adding unrelated projects or portfolio cards.
- Committing local virtual environments or generated files.
- Introducing offensive security tooling code into this repository.

## Local Validation

Run the repository checks before opening a pull request:

```bash
python -m unittest discover -s tests -v
```

## Pull Request Checklist

- Keep changes focused and easy to review.
- Confirm that both PDF links still work.
- Confirm that the website still loads from index.html.
- Update README sections if notebook positioning or coverage changes.
