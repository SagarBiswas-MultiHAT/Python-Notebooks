const yearTarget = document.getElementById("year");
if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
}

const statusTarget = document.getElementById("status-message");
const timeTarget = document.getElementById("status-time");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (statusTarget) {
    const statusMessages = [
        "indexing notebook sectors",
        "routing to pythonic_odyssey.pdf",
        "routing to cybersecurity.pdf",
        "verifying links and assets",
        "ready for safe lab execution",
    ];
    let messageIndex = 0;

    const rotateStatus = () => {
        statusTarget.textContent = statusMessages[messageIndex % statusMessages.length];
        messageIndex += 1;
    };

    rotateStatus();
    setInterval(rotateStatus, 4200);
}

if (timeTarget) {
    const updateClock = () => {
        const now = new Date();
        timeTarget.textContent = now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        });
    };

    updateClock();
    setInterval(updateClock, 1000);
}

if (!reducedMotion) {
    // Fire an occasional short pulse to simulate a CRT sync glitch without being distracting.
    const triggerPulse = () => {
        document.body.classList.add("crt-pulse");
        window.setTimeout(() => {
            document.body.classList.remove("crt-pulse");
        }, 120);
    };

    setInterval(triggerPulse, 6500);
}

const catalogGrid = document.getElementById("catalog-grid");
const ldJson = document.getElementById("catalog-ld-json");

if (catalogGrid || ldJson) {
    fetch("data/notebooks.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Unable to fetch catalog");
            }
            return response.json();
        })
        .then((catalog) => {
            const baseUrl = catalog.primaryUrl ?? window.location.origin;

            if (catalogGrid && Array.isArray(catalog.notebooks)) {
                catalogGrid.innerHTML = catalog.notebooks
                    .map((notebook) => {
                        const tags = Array.isArray(notebook.tags)
                            ? notebook.tags
                                .map((tag) => `<span>${tag}</span>`)
                                .join("")
                            : "";
                        const tagLabel = Array.isArray(notebook.tags) ? notebook.tags.join(", ") : "tags";

                        return `
                            <article class="card catalog-card">
                                <div class="catalog-tags" aria-label="${tagLabel}">
                                    ${tags}
                                </div>
                                <h3>${notebook.title}</h3>
                                <p>${notebook.focus}</p>
                                <div class="catalog-actions">
                                    <a class="text-link" href="${notebook.url}" target="_blank" rel="noreferrer">${notebook.cta}</a>
                                </div>
                            </article>
                        `;
                    })
                    .join("");
            }

            if (ldJson && Array.isArray(catalog.notebooks)) {
                const parts = catalog.notebooks.map((notebook) => ({
                    "@type": "CreativeWork",
                    name: notebook.title,
                    description: notebook.focus,
                    keywords: notebook.tags,
                    url: new URL(notebook.url, baseUrl).href,
                }));

                const payload = {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    name: "Python Notebooks",
                    description: catalog.description,
                    url: baseUrl,
                    about: catalog.keywords,
                    author: {
                        "@type": "Person",
                        name: "Sagar Biswas",
                    },
                    dateModified: catalog.lastUpdated,
                    hasPart: parts,
                };

                ldJson.textContent = JSON.stringify(payload, null, 2);
            }
        })
        .catch((error) => {
            console.warn("Catalog payload failed", error);

            if (catalogGrid) {
                catalogGrid.innerHTML = "<p>Catalog unavailable right now.</p>";
            }
        });
}
