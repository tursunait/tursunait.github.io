import React from "react";
import mock00 from '../assets/images/mock00.png';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Leadership</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/tursunait/udacity-ab-testing" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/tursunait/udacity-ab-testing" target="_blank" rel="noreferrer"><h2>Udacity Onboarding Experiment Analysis</h2></a>
                <p>
                    Developed an A/B testing framework, validated randomization, defined outcome and guardrail
                    metrics, and analyzed retention and revenue trade-offs using Python.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/ericiortega/ids705-phishing-detection" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ericiortega/ids705-phishing-detection" target="_blank" rel="noreferrer"><h2>Behavioral Modeling for Phishing Detection</h2></a>
                <p>
                    Created linguistic and behavioral features (e.g., urgency, authority cues) and trained
                    models including Logistic Regression, XGBoost, LSTM, and BERT to improve recall and
                    robustness against adversarial variations.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/tursunait/Cloud-Hosted-Notebook-Data-Manipulation-Tursunai" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/tursunait/Cloud-Hosted-Notebook-Data-Manipulation-Tursunai" target="_blank" rel="noreferrer"><h2>Amazon Sales Data Analysis and Demand Forecasting</h2></a>
                <p>
                    Forecasted demand trends using Prophet on Amazon sales data and analyzed fulfillment and courier
                    impact on top-selling items to inform inventory decisions.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/tursunait/Databricks_Urbanization_Analysis_And_Dashboard" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/tursunait/Databricks_Urbanization_Analysis_And_Dashboard" target="_blank" rel="noreferrer"><h2>Databricks Urbanization Analysis &amp; Dashboard</h2></a>
                <p>
                    Designed a Databricks SQL and Python ETL pipeline for processing public urbanization datasets,
                    logging queries, and visualizing population density and urban index trends in dashboards.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/tursunait/py_script_with_SQLDatabase" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/tursunait/py_script_with_SQLDatabase" target="_blank" rel="noreferrer"><h2>Py Script with SQL Database</h2></a>
                <p>
                    Built a Python CLI app performing CRUD operations and SQL queries on a SQLite database,
                    with a full CI/CD pipeline, unit testing, and automated query logging.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/Afag-Ramazanova/AskSQL-Natural-Language-to-SQL-query-converter" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Afag-Ramazanova/AskSQL-Natural-Language-to-SQL-query-converter" target="_blank" rel="noreferrer"><h2>AskSQL – Text-to-SQL Microservice</h2></a>
                <p>
                    Built a Text-to-SQL microservice using AWS Bedrock (Claude 3.5 API) to convert natural language
                    inputs into SQL queries, optimizing prompts to address RAG challenges and enable real-time
                    database interactions.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;
