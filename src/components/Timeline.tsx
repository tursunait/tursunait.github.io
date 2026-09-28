import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>PROFESSIONAL EXPERIENCE</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2025 – May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Duke University Capstone, sponsored by BNY · Durham, NC</h4>
            <ul>
              <li>Designed and orchestrated a multi-agent system (CrewAI, Claude and OpenAI APIs) with a user-facing UI that turns raw transaction data into validated SAR/CTR compliance reports, cutting report generation from 60 to 4 minutes.</li>
              <li>Built the RAG retrieval layer: a Weaviate vector database of regulation embeddings with hybrid keyword + embedding search.</li>
              <li>Implemented trace-level logging and retrieval attribution for every agent, giving evaluation visibility and a full audit trail across the pipeline for a regulated banking workflow.</li>
              <li>Engineered schema-aware field mapping and structured outputs for the PDF-filing agent, closing required-field gaps.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 – Jun 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Cayu Technologies · San Francisco, CA</h4>
            <ul>
              <li>Built a production RAG voice agent (n8n; Claude, OpenAI, and Google APIs) with tools for scheduling, call logging, AI summaries, and messenger callbacks; autonomously resolved 33% of inbound calls (~1.6K/month) via prompt engineering and call routing.</li>
              <li>Fine-tuned an OpenAI LLM on labeled logistics call transcripts; pre/post evaluation on a 100-case rubric (tone, accuracy, domain terminology, clarity) showed a 28% improvement in voice agent performance.</li>
              <li>Built a speech-to-text pipeline (AssemblyAI) over 800K+ calls; used the Claude and OpenAI APIs to extract intent, summaries, and keywords, surfacing failure patterns that improved client support workflows.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 – Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">O! Mobile Operator · Kyrgyzstan</h4>
            <ul>
              <li>Owned and optimized ETL pipelines processing 2B+ daily telecom records, reducing latency 35% through SQL optimization and maintaining 99.5% uptime for 10+ downstream teams.</li>
              <li>Maintained 50+ production pipelines, proactively resolving data gaps behind churn, revenue, and usage KPIs.</li>
              <li>Built a feature extraction pipeline (engagement, call, location metrics) that improved a clustering model, driving a 12% conversion lift across 5 tariff campaigns.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2022 – Jan 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Associate, Data Analytics and AI</h3>
            <h4 className="vertical-timeline-element-subtitle">PwC Kazakhstan</h4>
            <ul>
              <li>Led a 4-person team delivering a client Data Maturity Assessment tool: engineered the scoring algorithm and integrated Generative AI to turn executive survey responses into gap analyses, informing the client’s $2M+ investment decision.</li>
              <li>Built a multi-criteria ranking model (feature engineering, unsupervised composite scoring) across ~1K sites to identify the top 100 retail expansion locations; delivered a Tableau map to executives that informed 16+ store openings.</li>
              <li>Co-authored PwC Kazakhstan Macroeconomic Review, analyzing Brent oil, exchange rates, inflation, and base rate trends alongside expert survey forecasts to deliver a quarterly economic outlook.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2021 – Nov 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Analytics Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Air Astana (Fly Arystan) · Kazakhstan</h4>
            <ul>
              <li>Built management accounts dashboards in Power BI from scratch, combining data from SQL databases and Excel reporting files.</li>
              <li>Delivered interactive financial and operational reporting used directly by Fly Arystan’s CFO to support decision-making.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
