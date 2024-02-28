function constructionCrew(input) {

    let obj = { ...input };

    if (obj.dizziness) {
        obj.levelOfHydrated += obj.weight * 0.1 * obj.experience;
        obj.dizziness = false;
    }
    return obj;

}
console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));
