import {surpriseMePrompts} from "../components"

export function getRandomPrompt(prompts){
    const randomIndex=Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt=surpriseMePrompts[randomIndex];

    if(randomPrompt===prompts) return getRandomPrompt(prompts)
    return randomPrompt;
}