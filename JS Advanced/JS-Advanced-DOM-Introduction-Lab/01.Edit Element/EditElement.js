function editElement(ref, match, replaceText) {
    let text = ref.textContent;
    const matcher = new RegExp(match, "g");
    const result = text.replace(matcher, replaceText);
    ref.textContent = result
    
}