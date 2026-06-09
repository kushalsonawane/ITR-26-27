const topicSeed = [
    {
        title: "Selectors and Styling",
        category: "css",
        tags: ["selectors", "specificity", "pseudo-elements"],
        description: "Combines grouped selectors, attribute selectors, hover states, first-letter styling, and reusable utility patterns."
    },
    {
        title: "Modern Layout Systems",
        category: "css",
        tags: ["grid", "flexbox", "media queries"],
        description: "Uses grid for cards, flexbox for toolbars and buttons, and responsive breakpoints inspired by the CSS folder."
    },
    {
        title: "DOM and Events",
        category: "dom",
        tags: ["querySelector", "createElement", "delegation"],
        description: "Builds cards and task rows with JavaScript while routing actions through event delegation."
    },
    {
        title: "JavaScript Data Flow",
        category: "js",
        tags: ["arrays", "objects", "classes"],
        description: "Stores state in arrays of objects, wraps behavior in a class, and summarizes data with array methods."
    },
    {
        title: "Async Practice",
        category: "js",
        tags: ["promise", "setTimeout", "status"],
        description: "Simulates asynchronous behavior to reflect the async and promise practice in the source material."
    },
    {
        title: "Mini Project Energy",
        category: "dom",
        tags: ["todo", "interactive", "practice"],
        description: "Takes the same hands-on learning style from the todo and event demos and turns it into one guided page."
    }
];

class ConceptSprintApp {
    constructor(topics) {
        this.topics = topics;
        this.tasks = [
            { id: 1, text: "Review CSS grid card layout", done: false },
            { id: 2, text: "Practice event delegation", done: true },
            { id: 3, text: "Refactor state with a class", done: false }
        ];
        this.activeFilter = "all";
        this.searchTerm = "";
        this.colors = ["#2f7d64", "#a44a3f", "#5e5ce6", "#9c6b14", "#006d77"];
        this.colorIndex = 0;

        this.topicGrid = document.querySelector("#topic-grid");
        this.metrics = document.querySelector("#metrics");
        this.taskList = document.querySelector("#task-list");
        this.taskForm = document.querySelector("#task-form");
        this.taskInput = document.querySelector("#task-input");
        this.searchInput = document.querySelector("#search-topics");
        this.filterGroup = document.querySelector(".filter-group");
        this.asyncMessage = document.querySelector("#async-message");
        this.loadInsightButton = document.querySelector("#load-insight");
        this.shuffleThemeButton = document.querySelector("#shuffle-theme");
        this.menuToggle = document.querySelector(".menu-toggle");
        this.navLinks = document.querySelector("#nav-links");

        this.bindEvents();
        this.render();
    }

    bindEvents() {
        this.taskForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const value = this.taskInput.value.trim();

            if (!value) {
                return;
            }

            this.tasks.push({
                id: Date.now(),
                text: value,
                done: false
            });

            this.taskInput.value = "";
            this.renderTasks();
            this.renderMetrics();
        });

        this.taskList.addEventListener("click", (event) => {
            const button = event.target.closest("button[data-action]");
            if (!button) {
                return;
            }

            const item = button.closest("li[data-id]");
            const taskId = Number(item.dataset.id);
            const action = button.dataset.action;

            if (action === "toggle") {
                this.tasks = this.tasks.map((task) =>
                    task.id === taskId ? { ...task, done: !task.done } : task
                );
            }

            if (action === "remove") {
                this.tasks = this.tasks.filter((task) => task.id !== taskId);
            }

            this.renderTasks();
            this.renderMetrics();
        });

        this.searchInput.addEventListener("input", (event) => {
            this.searchTerm = event.target.value.toLowerCase();
            this.renderTopics();
            this.renderMetrics();
        });

        this.filterGroup.addEventListener("click", (event) => {
            const button = event.target.closest("button[data-filter]");
            if (!button) {
                return;
            }

            this.activeFilter = button.dataset.filter;
            document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("is-active"));
            button.classList.add("is-active");
            this.renderTopics();
            this.renderMetrics();
        });

        this.loadInsightButton.addEventListener("click", async () => {
            this.asyncMessage.textContent = "Loading insight...";
            const message = await this.fetchInsight();
            this.asyncMessage.textContent = message;
        });

        this.shuffleThemeButton.addEventListener("click", () => {
            this.colorIndex = (this.colorIndex + 1) % this.colors.length;
            document.documentElement.style.setProperty("--accent", this.colors[this.colorIndex]);
            document.documentElement.style.setProperty("--accent-strong", this.colors[(this.colorIndex + 1) % this.colors.length]);
        });

        this.menuToggle.addEventListener("click", () => {
            const open = this.navLinks.classList.toggle("is-open");
            this.menuToggle.classList.toggle("is-open", open);
            this.menuToggle.setAttribute("aria-expanded", String(open));
        });
    }

    fetchInsight() {
        const lines = [
            "Grid handles the broad layout while flexbox keeps the smaller interface pieces aligned.",
            "Event delegation keeps the task board simple even as new elements are created dynamically.",
            "Classes help group state and behavior so the page logic stays easier to reason about.",
            "Array methods like map, filter, and reduce make UI summaries concise and expressive."
        ];

        return new Promise((resolve) => {
            setTimeout(() => {
                const randomLine = lines[Math.floor(Math.random() * lines.length)];
                resolve(randomLine);
            }, 700);
        });
    }

    getVisibleTopics() {
        return this.topics.filter((topic) => {
            const matchesFilter = this.activeFilter === "all" || topic.category === this.activeFilter;
            const haystack = `${topic.title} ${topic.description} ${topic.tags.join(" ")}`.toLowerCase();
            const matchesSearch = haystack.includes(this.searchTerm);
            return matchesFilter && matchesSearch;
        });
    }

    renderTopics() {
        const visibleTopics = this.getVisibleTopics();
        this.topicGrid.innerHTML = "";

        visibleTopics.forEach((topic) => {
            const card = document.createElement("article");
            card.className = "topic-card";
            card.innerHTML = `
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
                <div class="badges">
                    ${topic.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
                </div>
            `;
            this.topicGrid.append(card);
        });
    }

    renderTasks() {
        this.taskList.innerHTML = "";

        this.tasks.forEach((task) => {
            const item = document.createElement("li");
            item.className = `task-item${task.done ? " is-done" : ""}`;
            item.dataset.id = String(task.id);
            item.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="task-action" data-action="toggle" type="button">${task.done ? "Undo" : "Done"}</button>
                    <button class="task-action" data-action="remove" type="button">Remove</button>
                </div>
            `;
            this.taskList.append(item);
        });
    }

    renderMetrics() {
        const totalTopics = this.getVisibleTopics().length;
        const totalTasks = this.tasks.length;
        const completedTasks = this.tasks.filter((task) => task.done).length;
        const cssTopics = this.topics.filter((topic) => topic.category === "css").length;

        const metricData = [
            { label: "Visible topics", value: totalTopics },
            { label: "Task count", value: totalTasks },
            { label: "Completed", value: completedTasks },
            { label: "CSS topics", value: cssTopics }
        ];

        this.metrics.innerHTML = metricData
            .map((item) => `
                <div class="metric-box">
                    <span>${item.label}</span>
                    <strong>${item.value}</strong>
                </div>
            `)
            .join("");
    }

    render() {
        this.renderTopics();
        this.renderTasks();
        this.renderMetrics();
    }
}

new ConceptSprintApp(topicSeed);
