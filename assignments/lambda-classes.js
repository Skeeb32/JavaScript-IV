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

}
}