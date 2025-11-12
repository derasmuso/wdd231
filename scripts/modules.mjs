import byuiCourse from "..scripts/course.mjs";
import { populateSections } from "..scripts/sections.mjs";
import { setTitle, renderSections } from "..scripts/output.mjs";

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});

setTitle(byuiCourse);
populateSections(byuiCourse.sections);
renderSections(byuiCourse.sections);