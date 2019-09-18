import React from 'react';

import '../../style/2.css';

const Two = () => {
        return (
            <div className="week-page">
            <h2>Week 2</h2>
            <p>Under denna vecka har vi skapat ett registerformulär och en egendesignad date-picker. Min date-picker består utav 3 stycken select-satser för att välja dag, månad och år. Jag lyckades inte att importera en array med värdena, så dessa är skrivna rakt upp och ner i select-satsen. Längre fram skulle jag vilja strukturera upp formuläret ännu mer och importera värden istället. Jag har svårt att förstå mig på ramverket och märker att jag har svårt att 'översätta' Vanilla JS till just ReactJS. </p>

            <p>Tanken att skapa en date-picker med olika div:ar kändes övermäktig. Denna uppbyggnad fick jag inspiration från en kurskamrat som delade med sig utav en skärmdump på sitt slutresultat. Keep it simple !</p>

            <p>Jag har också uppdaterat bakgrunden med en färgglad img samt försökt att skapa en dropdown-meny för dessa redovisningstexter. Denna meny har jag inte lyckats att implementera rätt, så jag väljer att låta den vara ofärdig för tillfället. Men jag kommer att fortsätta med den i kommande uppgifter. </p>
            </div>
        );
};

export default Two;
