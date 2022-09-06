import React from "react";
import Sketch from "react-p5";

const CategoriesChart = (props)=>{

    var categories=[
        {
            count: 190050,
            name: "Publication"
        },
        {
            count: 144760,
            name: "ChemicalSubstance"
        },
        {
            count: 73505,
            name: "OntologyClass"
        },
        {
            count: 37410,
            name: "Drug"
        },
        {
            count: 30474,
            name: "BiologicalProcess"
        },
        {
            count: 26801,
            name: "Protein"
        },
        {
            count: 24736,
            name: "Disease"
        },
        {
            count: 19494,
            name: "Gene"
        },
        {
            count: 16544,
            name: "PhenotypicFeature"
        },
        {
            count: 12291,
            name: "MolecularActivity"
        },
        {
            count: 5563,
            name: "NamedThing"
        },
        {
            count: 5514,
            name: "AnatomicalEntity"
        },
        {
            count: 4463,
            name: "CellularComponent"
        },
        {
            count: 2097,
            name: "OrganismalEntity"
        },
        {
            count: 1475,
            name: "Cell"
        },
        {
            count: 165,
            name: "SequenceFeature"
        },
        {
            count: 71,
            name: "RNA"
        },
        {
            count: 57,
            name: "Assay"
        },
        {
            count: 3,
            name: "MolecularEntity"
        },
        {
            count: 1,
            name: "OrganismTaxon"
        }
    ]

    let width = 1200;
    let height=800;

    var circles = [];
    var radius =     [150,140,130,120,110,100,95, 90, 85, 80, 75,  70, 65,60,55]
    var xPositions = [600,850,400,890,680,320,360,150,980,130,1050,600,100,1050,180]
    var yPositions = [400,220,650,490,670,400,200,650,680,450,350, 150,250,150,90]
    for(var i=0;i<15;i++){
        var circle={
            x: xPositions[i],
            y: yPositions[i],
            r: radius[i],
            text: categories[i].name.replace(/([A-Z])/g, '\n$1').trim() + '\n' + categories[i].count,

        }
        circles.push(circle)
    }
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
        //p5.background(0)

        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.noStroke();
        for(var i=0;i<circles.length;i++){
            var x = circles[i].x
            var y = circles[i].y
            var r = circles[i].r

            p5.fill('#003049');
            p5.ellipse(x, y, r*2, r*2);

            p5.fill('#fff');
            p5.textSize(r/3);
            p5.text(circles[i].text, x, y,);

        }
    };



    const draw = (p5) => {
    };

    return (
        <Sketch setup={setup} draw={draw} />
    );

}

export default CategoriesChart;