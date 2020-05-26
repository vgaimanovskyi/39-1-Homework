let testimonials = [{
    firstName: "Tomothy",
    secondName: "Bowman",
    skill: "Marketing",
    photo: "images/testimonials/bowman.jpg",
    description: "This is Photoshop's version of Lorem Ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, repellat!",
}, {
    firstName: "Steve",
    secondName: "Tracy",
    skill: "CEO",
    photo: "images/testimonials/tracy.jpg",
    description: "This is Photoshop's version of Lorem Ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis corrupti deserunt ipsa? Repudiandae, voluptates eaque?",
}, {
    firstName: "Hellen",
    secondName: "Johns",
    skill: "Clients",
    photo: "images/testimonials/johns.jpg",
    description: "This is Photoshop's version of Lorem Ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.Officia harum excepturi qui.",
}];

class Testimonial {
    constructor(data) {
        this.firstName = data.firstName;
        this.secondName = data.secondName;
        this.skill = data.skill;
        this.photo = data.photo;
        this.description = data.description;
    }
    print() {
        let result = `<div class="carousel__slide carousel__slide--animation">`;
        result += `<div class="testimonials">`;
        result += `<p class="testimonials__description">${this.description}</p>`;
        result += `<span class="testimonials__photo">`;
        result += `<img src="${this.photo}" alt="${this.secondName}" class="photo">`;
        result += `</span>`;
        result += `<div class="testimonials__block">`;
        result += `<h2 class="testimonials__caption"><span class="color-word">${this.firstName}</span> ${this.secondName}</h2>`;
        result += `<p class="testimonials__skill">${this.skill}</p>`;
        result += `</div></div></div>`;

        document.getElementsByClassName("carousel")[0].innerHTML += result;
    }
};
class Testimonials {
    constructor(_data) {
        this.data = _data;
    }
    print() {
        for (let item of this.data) {
            const testimonialItem = new Testimonial(item);
            testimonialItem.print();
        }
    }
};
const testimonialsList = new Testimonials(testimonials);
testimonialsList.print();