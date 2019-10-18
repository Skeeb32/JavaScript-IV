// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name,
            this.age = attr.age,
            this.location = attr.location
    }
    speak() {
        return `Hello my name is ${this.name} and I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.speialty = attr.speialty,
            this.favLanguage = attr.favLanguage,
            this.catchPhrase = attr.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.perviousBackground = attr.perviousBackground,
            this.className = attr.className,
            this.favSubjects = attr.favSubjects
    }
    listsSubjects() {
        return `My favorite subjects are ${this.favSubjects}`;
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName,
            this.favInstructor = attr.favInstructor
    }
    standUp(pm, channel) {
        return `${pm.name} announces to ${channel} @channel standy times!`
    }
    debugsCode(pm, student, subject) {
        return `${pm.name} debugs ${student.name}'s code on ${subject}`;
    }
}

Let Mo = new Instructor({
    name: "Mo Davoodi",
    age: 27,
    location: 'Canada',
    speialty: "HTML5",
    favLanguage: 'JavaScript',
    catchPhrase: 'You almost got it, dude!!',
    )
}

Let Saad = new Instructor({
    name: "Saad Shah",
    age: 31,
    location: 'California',
    speialty: "C++",
    favLanguage: 'React',
    catchPhrase: 'DANG IT!!',
    )
}
Let Zahrah = new Student({
    name: "Zahrah Ali",
    age: 29,
    location: 'California',
    speialty: "JavaScript",
    favLanguage: 'Python',
    catchPhrase: 'I think I got it!',
    perviousBackground: "Nurse",
    className: 'Web 25',
    favSubjects: 'HTML5'
    )
}
Let Bilal = new Student({
    name: "Bilal Madha",
    age: 30,
    location: 'California',
    speialty: "JavaScript",
    favLanguage: 'React',
    catchPhrase: 'One more time please.',
    perviousBackground: "Pro Ball Player",
    className: 'Web 25',
    favSubjects: 'HTML5'
    )
}
Let Aziz = new Student({
    name: "Aziz Tazi",
    age: 28,
    location: 'Spain',
    speialty: "Front-end",
    favLanguage: 'CSS',
    catchPhrase: 'I got this!',
    perviousBackground: "Film Maker",
    className: 'Web 25',
    favSubjects: 'CSS',
    )
};

Let TK = new ProjectManagers({
    name: "TK Smith",
    age: 43,
    location: 'Japan',
    speialty: "Front-end",
    favLanguage: 'CSS',
    catchPhrase: 'It will be a sitch',
    perviousBackground: "Film Maker",
    className: 'Web 25',
    favSubjects: 'CSS',
    gradClassName: 'Web 23',
    favInstructor: 'Sam Hunt',
    )
}
Let Ryan = new ProjectManagers({
    name: "Ryan Billings",
    age: 32,
    location: 'New York',
    speialty: "Python",
    favLanguage: 'C++',
    catchPhrase: 'You can do this also!',
    perviousBackground: "Film Maker",
    className: 'Web 25',
    favSubjects: 'CSS',
    gradClassName: 'Web 24',
    favInstructor: 'Duo Maxwell',
    )
};

console.log(Mo);
console.log(Saad);
console.log(Zahrah);
console.log(Bilal);
console.log(Aziz);
console.log(TK);
console.log(Ryan);
console.log(Mo.demo());
console.log(Saad.grade(Zahrah, 'JavaScript-I'));
console.log(Zahrah.listsSubjects());
console.log(Bilal.PRAssignment(Zahrah, 'LESS'));
console.log(Aziz.sprintChallenge, 'CSS');
console.log(TK.standUp, 'Web 25');
console.log(Ryan.debugsCode(Mo, 'Python'));