import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Regression",
    "Tree Models",
    "Clustering",
    "LSTM",
    "BERT",
    "LLM fine-tuning",
    "TensorFlow",
    "PyTorch",
];

const labelsSecond = [
    "Hypothesis Testing",
    "Experimental Design",
    "Observational Analysis",
    "Model Diagnostics",
];

const labelsThird = [
    "PySpark",
    "Databricks",
    "BigQuery",
    "Oracle",
    "PostgreSQL",
    "AWS Lambda",
    "AWS S3",
    "AWS DynamoDB",
    "Python",
    "SQL",
    "R",
    "Spark",
    "Docker",
    "Git",
    "APIs",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning & Applied Science</h3>
                    <p>
                        Experience designing, training, and evaluating models from classical ML to LLMs,
                        with a focus on robust evaluation and real-world impact.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Statistics & Experimentation</h3>
                    <p>
                        Skilled in experiment design, causal thinking, and diagnostic analysis to ensure
                        that data-driven decisions are statistically sound.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Data Engineering & Tools</h3>
                    <p>
                        Build and maintain reliable data pipelines and infrastructure, enabling scalable
                        analytics and ML workflows on large datasets.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
