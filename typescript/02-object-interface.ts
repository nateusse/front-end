//objetos 

const skills: string[] = ["invensible", "superstrong", "compasion", "intelligence"]

interface Character {
    name: String,
    hp: string,
    skills: string[],
    workplace?: string  //? para hacerlo opcional

}

const wonderWoman: Character = {
    name: "Diana",
    //Error, refers to a tpe but is used as a value here. Oh shit! No igual
    skills: ["hola"],
    hp: ""
}



console.table(wonderWoman)
export {}