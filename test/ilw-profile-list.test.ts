import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-profile-list";

const content = html`
    <ilw-profile-list>
        <a slot="name" href="#">Smith, Jane</a>
        <img slot="image" src="profile.webp" alt="Jane Smith">
        <div slot="subtitle">Department of Redundancy Department</div>
        <div><a href="#">jsmith@illinois.edu</a> | <a href="#">(217) 123-4567</a></div>
    </ilw-profile-list>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Smith, Jane");
    await expect.element(element).toBeInTheDocument();
});