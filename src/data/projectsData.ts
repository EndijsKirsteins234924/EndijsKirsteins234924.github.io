import sdgImage1 from "../assets/sdg-im-1.jpg";

export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string;
    technologies: string[];
    challenges: string;
    solutions: string;
    results: string;
    embedUrl?: string;
}

export const projectsData: Record<string, Project> = {
    "sdg-poverty-education-analysis": {
        id: "sdg-poverty-education-analysis",
        title: "SDG Analysis: Education-Poverty Correlation",
        description: "Comprehensive Power BI research project analyzing the correlation between primary school completion rates and international poverty levels across 2008-2021 using UN SDG data",
        fullDescription: `I conducted data analytics research investigating the relationship between SDG 1 (No Poverty) and SDG 4 (Quality Education) using United Nations Statistics Division data spanning 2008-2021. My research question was: "What is the correlation between the completion rate of primary school and the percentage of people living under the international poverty line?"

The Research Challenge

Traditional education-poverty research often lacks comprehensive global data and rigorous statistical analysis. I needed to work with datasets from 200+ countries across 14 years, each with varying data quality, reporting standards, and potential political biases.

Applying CRISP-DM Methodology

I applied the CRISP-DM (Cross-Industry Standard Process for Data Mining) methodology to ensure a systematic approach. This involved business understanding, data understanding, data preparation, modeling, evaluation, and deployment phases.

Data Selection and Acquisition

The primary dataset for school completion rates was too large for direct download, requiring special request via email from UN Statistics Division. I iterated through multiple data source combinations before settling on a single-source approach ensuring consistency across all metrics.

Data Cleaning and Transformation

Using Power Query, I performed extensive ETL operations. I removed unnecessary SDG target columns and reference codes, standardized column names from scientific notation to clear labels, and strategically handled missing values. Many countries reported data for only 3 of 14 years, creating significant gaps requiring careful documentation.

I created calculated columns for quantile classifications (0-20%, 20-40%, 40-60%, 60-80%, 80%+) and developed DAX measures for correlation coefficient calculation.

Building the Interactive Dashboard

I created a multi-page Power BI dashboard with three main sections:

The Completion Rate page features a donut chart distribution, KPI card showing 81% global average, bar chart for location comparison, interactive map and a year slicer for filtering the figures.

The Poverty Rate page includes a geographic heat map highlighting Africa's negative concentration, line chart showing urban-rural trends, and demographic table breaking down by age groups (under 15: 7.33%, working age: 5.02%, elderly: 5.11%, overall: 5.71%).

The Correlation page displays a dual-axis stacked column chart, scatter plot with regression line, and prominent -0.42 correlation coefficient display.

Key Findings

My analysis revealed a moderate negative correlation (-0.42) between poverty and primary school completion. This supports the hypothesis that lower poverty associates with higher educational access, though the apparent correlation indicates multiple contributing factors.

Approximately 50% of countries achieve 80%+ completion rates. Urban areas consistently show highest completion rates, though differences are less pronounced than poverty disparities.

I identified 47 countries exceeding 20% poverty threshold requiring targeted interventions, with Africa emerging as the region with highest concentration of high-poverty nations.

Surprising Insights

Children under 15 face highest poverty risk (7.33%) versus working-age (5.02%) and elderly (5.11%) populations. This contradicted my initial hypothesis that elderly populations would struggle most.

Countries like Argentina, South Africa, Mexico, and Ecuador demonstrate high completion (95%+) with low poverty, while Djibouti, Tanzania, and India show the inverse pattern.

Policy Implications

This research provides evidence-based foundation for targeted educational interventions in high-poverty regions. It supports the SDG framework emphasizing education as poverty alleviation mechanism while acknowledging need for multi-factor approaches.`,
        tags: ["Power BI", "Data Analytics", "Business Intelligence", "Statistical Analysis", "Research"],
        image: sdgImage1,
        technologies: ["Power BI Desktop", "DAX (Data Analysis Expressions)", "Power Query M", "CRISP-DM Methodology", "Statistical Analysis", "Geographic Visualization", "ETL Processes"],
        challenges: "Massive dataset requiring email request, sparse temporal coverage (3 of 14 years), inconsistent country naming, potential political bias in reporting, missing values, and dashboard performance optimization.",
        solutions: "CRISP-DM methodology, Power Query ETL operations, DAX measures for correlation (-0.42), quantile bins, multi-page interactive dashboard, cross-filtering visualizations, and consistent color coding.",
        results: "Identified -0.42 correlation coefficient, documented 50% of countries with 80%+ completion, revealed 47 high-poverty countries, discovered children face highest poverty risk (7.33%), created comprehensive academic report with policy recommendations.",
        embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiM2Y3ZDc1MTgtZTU1Yi00Mzc2LTlkOWItNzJhNWEyYWE2N2EzIiwidCI6IjBhMzM1ODliLTAwMzYtNGZlOC1hODI5LTNlZDA5MjZhZjg4NiIsImMiOjl9",
    },
    "nac-player-suggestion": {
        id: "nac-player-suggestion",
        title: "NAC Breda Player Suggestion Solution",
        description: "Data-driven player recruitment system using machine learning to identify undervalued defensive talent for Dutch professional football club NAC Breda",
        fullDescription: `I developed a comprehensive machine learning solution for NAC Breda football club to revolutionize their player recruitment strategy through data-driven evaluation methods.

The Football Analytics Challenge

Traditional scouting relies heavily on subjective observations and personal judgments. NAC Breda needed an objective, data-driven approach to identify undervalued defensive talent within their 200k-500k budget constraints.

Understanding the Problem

Through exploratory data analysis, I discovered critical defensive weaknesses in NAC Breda's squad. Their defender position group scored -0.093 (standardized) versus opponents like Emmen at +0.103. This defensive vulnerability correlated directly with their playoff losses (1-2 and 0-2 against Emmen).

Identifying the Key Metric

I built a preliminary model to predict player market values and discovered "Deep Completions per 90" as the most important feature (6.7% importance). This defensive metric became my focus for identifying undervalued talent.

Deep completions represent successful passes into the attacking third—a crucial indicator of a player's ability to build attacks from defensive positions.

Model Development

I implemented systematic model selection using grid search across RandomForestRegressor and GradientBoostingRegressor algorithms. After hyperparameter tuning to optimize learning rate and n_estimators, I selected GradientBoostingRegressor for optimal performance.

The final model achieved RMSE of 0.687, meaning predictions deviated by approximately 0.687 deep completions from actual values—providing reliable foundation for player evaluation.

Strategic Player Identification

I developed a clever methodology: calculating prediction residuals (predicted minus actual deep completions) to spotlight players where the model predicted higher performance than current statistics showed. This indicated untapped potential overlooked by traditional scouting.

I implemented budget-aware filtering automatically identifying candidates within NAC Breda's 200k-500k financial constraints.

The Recommendations

I successfully identified three high-potential defensive player candidates:

J. Weberbauer from Ried, P. Galchev from Levski Sofia, and R. Siht from Nõmme Kalju—each demonstrating strong predicted performance in deep completions that could address the club's defensive vulnerabilities.

All three players showed balanced age/experience profiles with consistent match participation, indicating reliability and immediate impact potential.

Communicating with Stakeholders

I created comprehensive visualizations including position distribution bar charts, team comparison radar plots, and feature importance pie charts. This enabled clear communication with non-technical club management unfamiliar with data science terminology.

Moving Forward

This project positioned NAC Breda as a data-driven innovator in Dutch football, aligning with modern sports analytics trends adopted by top-tier clubs worldwide. The reusable analytical framework enables continuous identification of undervalued talent as new player data becomes available.`,
        tags: ["Python", "Machine Learning", "Scikit-learn", "Sports Analytics", "Data Science"],
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop",
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "GradientBoostingRegressor", "GridSearchCV", "Matplotlib", "Seaborn"],
        challenges: "Transitioning from subjective to objective evaluation, limited data transparency, incomplete player statistics, feature selection from 100+ metrics, budget constraints (200k-500k), and explaining ML methodology to non-technical management.",
        solutions: "Comprehensive EDA pipeline, standardized scoring system, strategic feature selection ('Deep Completions per 90'), systematic model selection via grid search, prediction residuals methodology, and clear visualizations for stakeholders.",
        results: "RMSE of 0.687, identified 3 candidates within budget (Weberbauer, Galchev, Siht), quantified defensive weakness (-0.093 vs +0.103), validated 'Deep Completions per 90' as key metric (6.7% importance), created reusable framework, published 14-page academic report.",
    },
    "food-order-classification": {
        id: "food-order-classification",
        title: "Food Order Classification System",
        description: "Deep learning proof-of-concept system using computer vision to automatically verify restaurant orders and prevent incorrect deliveries through real-time image classification",
        fullDescription: `I developed a comprehensive computer vision solution addressing the food delivery industry's second-most prominent customer frustration: incorrect orders (27% of global complaints according to Statista 2022).

The Business Problem

Long delivery times top customer complaints at 34%, but incorrect orders come second at 27%. This creates significant costs through refunds, replacements, customer dissatisfaction, and damaged restaurant reputations.

The Vision: Order Checking Station

I designed an end-to-end proof-of-concept "Order Checking Station" enabling restaurants to automatically verify orders before delivery. The system classifies food items into 5 categories: Burger with Fries, Durum Wrap, Fish and Chips, Soup, and Taco.

Building the Foundation

I started with basic CNN architecture (Iterations 1-2) using Sequential models with convolutional layers, MaxPooling, and dense layers. However, this approach showed poor performance and high overfitting with only 50 images per category.

The Breakthrough: Transfer Learning

I pivoted to transfer learning, leveraging MobileNetV2 pre-trained on ImageNet. By freezing base model layers and adding custom classification heads, I dramatically improved performance. Extensive data augmentation (rotation, zoom, flips, brightness adjustment) expanded the effective training set.

After 35+ epochs with early stopping, I achieved 96.6% validation accuracy—approaching the Human-Level Performance benchmark of 97.8%.

Making AI Explainable

Restaurant staff needed to understand and trust AI decisions. I implemented Grad-CAM (Gradient-weighted Class Activation Mapping) visualizations showing which image regions influenced predictions.

For example, the model correctly focused on bun structure and fries for burger identification, wrap folding patterns for durum classification, and distinctive taco shell shapes.

Human-Centered Design

I developed an intuitive order verification interface displaying expected order items versus AI-detected items side-by-side. Clear visual indicators (red X icon, order numbers) communicated mismatches instantly.

Think-aloud usability studies with restaurant staff validated the interface. Staff successfully interpreted displays and expressed confidence in the system's reliability for catching genuine errors.

Real-World Performance

The model demonstrated strong per-class performance across all 5 categories. It excelled on visually distinct items (soup, fish and chips) while maintaining robust performance on challenging similar categories (burger vs. taco).

Training curves showed healthy convergence with validation accuracy tracking training accuracy—critical for real-world deployment where the model encounters new food presentations.

Business Impact

The DAPS framework demonstrated clear ROI: reducing incorrect orders improves customer satisfaction, decreases refund costs, enhances restaurant reputation, and strengthens delivery platform partnerships.

Transfer learning efficiency meant requiring only 50 images per class instead of thousands, enabling rapid deployment to new restaurants without extensive data collection.

Future Directions

The scalable foundation is ready for expansion to 20+ menu items, multi-item order verification, and cross-restaurant deployment with restaurant-specific fine-tuning.`,
        tags: ["Python", "Deep Learning", "Computer Vision", "Transfer Learning", "CNN"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop",
        technologies: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Grad-CAM", "Transfer Learning", "Data Augmentation", "Usability Testing"],
        challenges: "Limited training data (50 images/category), visual similarity between categories, initial CNN overfitting, real-world lighting/angle variations, model interpretability for staff, real-time performance requirements, and user interface design.",
        solutions: "Transfer learning with MobileNetV2, extensive data augmentation, 35+ epochs with early stopping, Grad-CAM explainability visualizations, human-centered interface design, think-aloud usability studies, and DAPS framework for business value.",
        results: "96.6% validation accuracy (approaching 97.8% HLP), strong per-class performance, healthy convergence without overfitting, successful usability validation, clear business case with ROI path, scalable architecture for 20+ items, demonstrated 50-image efficiency.",
    },
    "incident-severity-analysis": {
        id: "incident-severity-analysis",
        title: "Impact Analysis of Traffic Incident Severity",
        description: "Machine learning system to predict traffic incident severity in Breda using ANWB Safe Driving dataset",
        fullDescription: `I developed a machine learning algorithm to analyze and predict traffic incident severity for four categories: Harsh Braking, Harsh Cornering, Harsh Accelerating, and Speeding.

The Road Safety Challenge

The city of Breda needed better understanding of traffic incidents to improve road safety. By classifying incidents into severity levels (1-3), the system enables better routing decisions and preventive measures for road users.

The Data Challenge

I immediately faced significant class imbalance issues. Some severity classes had as few as 2-25 samples while others had thousands. This severe imbalance made achieving consistent performance across all severity levels extremely difficult.

Initial models showed poor recall and F1-scores for underrepresented classes, with some categories performing at 0.00 precision.

Iterative Problem Solving

I implemented a multi-iteration approach with progressive improvements:

First, I applied balanced class weights to address the imbalance directly in the model training process.

Then, I binned middle and high severity classes together to increase support for rare categories, improving model stability.

Next, I developed custom class weights tailored specifically to each incident category (harsh braking, cornering, accelerating, speeding) based on their unique distributions.

Finally, I used GridSearchCV for comprehensive hyperparameter optimization, testing different criteria (gini/entropy), splitters, max_depth, and min_samples_split values.

Data Preprocessing

I performed comprehensive data preprocessing including outlier detection to remove anomalous readings, label encoding for categorical variables, feature standardization for consistent scales, and strategic train-test splitting to maintain representative distributions.

Model Selection

After testing RandomForestClassifier and DecisionTreeClassifier architectures, I found that DecisionTreeClassifier with optimized hyperparameters provided the best performance given the dataset constraints.

Achieving Results

The final model achieved 99% overall accuracy with excellent performance on well-represented classes: HC1 (Harsh Cornering Level 1) at 1.00 F1-score, SP1 (Speeding Level 1) at 1.00 F1-score, HB1 (Harsh Braking Level 1) at 0.96 F1-score, and HA1 (Harsh Accelerating Level 1) at 0.94 F1-score.

While some low-support classes remained challenging, the model represents the best achievable accuracy given dataset constraints.

Deployment and Impact

I successfully deployed a functional web application that predicts incident severity in real-time and provides actionable safety recommendations for road users.

The system complies with EU AI Act regulations as a high-risk classification system impacting public safety, with appropriate documentation and validation procedures.

Real-World Value

This system provides valuable insights for improving road safety in Breda. By predicting incident severity, it enables proactive routing decisions, targeted safety interventions, and data-driven traffic management strategies.`,
        tags: ["Python", "Machine Learning", "Scikit-learn", "Data Science", "Classification"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        technologies: ["Python", "Scikit-learn", "DecisionTreeClassifier", "RandomForestClassifier", "GridSearchCV", "Data Preprocessing", "Web Deployment"],
        challenges: "Severe class imbalance (2-25 samples for rare classes), poor initial recall/F1-scores, 0.00 precision on some categories, maintaining consistent performance across severity levels, and dataset size constraints.",
        solutions: "Multi-iteration approach, balanced class weights, severity binning, custom class weights per category, GridSearchCV hyperparameter optimization, comprehensive preprocessing (outliers, encoding, standardization), and strategic train-test splitting.",
        results: "99% overall accuracy, perfect F1-scores (1.00) for HC1 and SP1, strong performance on HB1 (0.96) and HA1 (0.94), deployed functional web application, EU AI Act compliance, actionable safety recommendations.",
    },
    "ai-adoption-sme": {
        id: "ai-adoption-sme",
        title: "AI Adoption Barriers in Small and Medium Enterprises",
        description: "Research study exploring how negative concerns about AI relate to SME employees' willingness to learn about artificial intelligence",
        fullDescription: `I conducted comprehensive mixed-methods research examining AI adoption challenges in small and medium-sized enterprises across healthcare, logistics, and hospitality sectors.

The Research Question

Why do SME employees hesitate to adopt AI technologies? Is it fear of job displacement, lack of understanding, management resistance, or something else entirely?

The Methodology Challenge

I faced multiple methodological challenges from the start. My sample size was small (6 participants), one interview required translation from Latvian, and quantitative responses showed geographic skew with predominant representation from South Africa.

Despite these limitations, I designed a rigorous approach to extract meaningful insights.

A Mixed-Methods Approach

I combined semi-structured interviews (20-30 minutes each) with quantitative surveys to triangulate findings and ensure validity. This dual approach allowed me to capture both nuanced perceptions and statistical patterns.

For qualitative analysis, I applied rigorous thematic analysis including open coding, axial coding, and selective coding to identify patterns systematically.

Ensuring Quality

I conducted peer debriefing with colleague Ron Lev Tabuchov to verify consistency of developed themes and labels. This external validation helped reduce subjective bias inherent in qualitative research.

I used data reduction techniques during transcription, merging synonymous labels to create cleaner, more interpretable themes.

Four Key Themes Emerged

Through systematic analysis, four primary themes affecting AI adoption crystallized:

Awareness and Understanding of AI - Many employees simply didn't know what AI could do or how it worked.

Concerns and Skepticism About AI - Worries ranged from job security to ethical implications and reliability.

Perceptions of AI in Society - Media portrayals and social narratives significantly influenced individual attitudes.

Opportunities and Positive Attitudes - Despite concerns, many recognized AI's potential benefits and expressed curiosity.

The Surprising Finding

Only employees with considerable concerns about AI showed disinterest in learning about it. Others demonstrated willingness to learn despite having reservations.

This suggests that concern and curiosity can coexist—the key is addressing specific worries through education rather than assuming all concerned employees are resistant.

Management's Role

A critical discovery: management's lack of recognition of AI's potential combined with employee misconceptions created significant adoption barriers. This represented a dual challenge requiring intervention at both organizational and individual levels.

Practical Recommendations

Employees showed strong preference for flexible, self-directed online learning platforms rather than mandatory training sessions.

I provided actionable recommendations for SMEs: implement targeted training programs addressing specific concerns, hold regular AI-focused educational discussions to build awareness gradually, and offer flexible learning strategies accommodating different schedules and learning styles.

Research Impact

I published the findings as a peer-reviewed research paper (DOI: 10.5281/zenodo.14001094), contributing to the growing body of knowledge on AI adoption in small businesses.

The research provides evidence-based guidance for SMEs seeking to improve employee readiness and reduce resistance to AI adoption through education and engagement strategies.`,
        tags: ["Research", "Mixed-Methods", "Qualitative Analysis", "AI Adoption", "Survey Design"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        technologies: ["Qualitative Research Methods", "Thematic Analysis", "Semi-structured Interviews", "Survey Design", "Correlation Analysis", "Data Visualization"],
        challenges: "Small sample size (6 participants), language barriers (Latvian translation), geographic data skew (South Africa), potential subjective bias, capturing nuanced perceptions across diverse industries, and bridging gap between AI potential and employee understanding.",
        solutions: "Mixed-methods approach (interviews + surveys), rigorous thematic analysis (open/axial/selective coding), peer debriefing with Ron Lev Tabuchov, data reduction techniques, triangulation for validity, correlation analysis, and visualization support.",
        results: "Published peer-reviewed paper (DOI: 10.5281/zenodo.14001094), identified 4 key themes, discovered concern-curiosity coexistence, revealed management-employee dual barrier, found preference for flexible online learning, provided actionable SME recommendations.",
    },
    "plant-phenotyping-robotics": {
        id: "plant-phenotyping-robotics",
        title: "Plant-Microbe Interaction Phenotyping: Root Segmentation and Precision Inoculation",
        description: "AI-powered system for automated root analysis and robotic precision inoculation using computer vision, robotics, and reinforcement learning",
        fullDescription: `I developed a multi-disciplinary pipeline integrating computer vision, reinforcement learning, and robotics to segment plant roots and control a liquid-handling robot for targeted inoculation. NPEC aimed to automate plant inoculation, enhancing speed, precision, and reproducibility while conserving time and resources.

Defining the Challenge

Plant phenotyping focuses on accurately measuring the physical and biological characteristics of plants, particularly their interactions with microbial communities. Even minor measurement errors can impact research findings, so my goal was to build a reliable system to identify and measure root structures accurately across diverse environments.

A Comprehensive Approach

My solution involved three integrated components—computer vision, robotics, and reinforcement learning—each vital for creating a pipeline that could detect root tips and analyze their growth patterns with high precision.

Developing the Computer Vision Pipeline

The first step involved designing a robust computer vision pipeline. I tested various segmentation models using U-Net architecture to optimize root tip detection accuracy. Through iterative model development, I progressed from an initial F1 score of 0.757 to a final score of 0.874, meeting NPEC's accuracy standards for reliable root segmentation.

Root Landmark Detection

Using instance segmentation results from the deep learning model, I conducted landmark detection to pinpoint specific points on roots. These landmarks enabled simulation environment training for the inoculation process, providing precise coordinates for robotic targeting.

Creating a Simulation Environment

To facilitate testing without physical equipment wear, I built a virtual environment using PyBullet physics simulation. This environment allowed me to observe robotic system movements and verify reliable workspace navigation before physical deployment.

Integrating Reinforcement Learning

With computer vision and simulation components working well, I developed a wrapper for the Gymnasium framework, integrating with Stable Baselines 3 for reinforcement learning. This model enabled the robot to identify and move to specific target locations, achieving remarkable 1mm accuracy with 100% positional precision.

Exploring PID Control as a Baseline

I implemented a PID (Proportional-Integral-Derivative) controller to compare against the reinforcement learning approach. While achieving reasonable performance with ~95% successful inoculations and 20 mean timesteps to goal, the traditional control method provided valuable baseline metrics for evaluating my ML approach.

System Integration

The final stage involved integrating the computer vision pipeline, reinforcement learning model, and PID controller into comprehensive systems. A significant challenge was translating pixel coordinates from vision output into real-world measurements. I developed coordinate transformation formulas enabling seamless operation across integrated systems.

Key Findings and Future Directions

This research demonstrated that reinforcement learning achieved 100% positional accuracy though with slower performance (83 steps vs 31 for PID) and reliability challenges (75% vs 95% successful inoculations). The hybrid approach showcased each method's strengths: PID for speed and reliability, RL for precision potential.

The system now processes complete pipelines: image capture → segmentation → skeleton extraction → path analysis → coordinate generation → robotic navigation → precision inoculation. This provides NPEC with a scalable foundation for automated plant-microbe interaction studies supporting food security research.

A Learning Experience

This project deepened my appreciation of how advanced technology can propel plant science. From building a computer vision pipeline to integrating diverse systems, I gained invaluable insights into the complexities of plant-microbe interactions and the promising applications of technology in this field.`,
        tags: ["Python", "Computer Vision", "Robotics", "Deep Learning", "Reinforcement Learning"],
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=500&fit=crop",
        technologies: ["Python", "U-Net Architecture", "PyBullet Simulation", "Stable Baselines 3", "PID Control", "Opentrons OT-2 API", "PyTorch", "OpenCV", "Skeletonization"],
        challenges: "Root segmentation accuracy (initial F1: 0.757), incomplete main root paths, lateral root interference, generalizability across growth stages, RL controller speed (83 vs 31 steps), reliability issues (75% vs 95%), and coordinate transformation.",
        solutions: "Iterative U-Net improvements (F1: 0.757 → 0.874), advanced skeleton path generation, landmark detection, PyBullet simulation, dual control systems (PID + RL), Gymnasium framework integration, and coordinate transformation formulas.",
        results: "1mm precision accuracy, F1 score of 0.874, 100% positional accuracy (RL), ~95% inoculation success (PID), 26% sMAPE (Kaggle), complete automated pipeline, scalable foundation for 10,000+ seedlings, supports NPEC food security research.",
    },
    "b2-spirit-imu-simulation": {
        id: "b2-spirit-imu-simulation",
        title: "Real-Time Motion Tracking: B2 Spirit IMU Simulation",
        description: "Interactive hardware-software system using MPU6050 IMU sensor and Arduino to control a custom-modeled B2 Spirit stealth bomber in Blender with real-time motion tracking",
        fullDescription: `I developed a comprehensive real-time motion tracking system integrating physical hardware with 3D animation software to create an interactive B2 Spirit stealth bomber simulation. This collaborative 2-week team project demonstrated seamless integration of embedded systems, sensor processing, 3D modeling, and real-time communication.

The Hardware-Software Bridge

The challenge was bridging the physical and digital worlds. I needed to capture motion from an IMU sensor and translate it into realistic aircraft movements in Blender with minimal latency.

Building the Data Pipeline

I built a three-stage data flow: the MPU6050 IMU sensor generates X, Y, Z rotation values from physical movement, PySerial library captures this data transmitted from Arduino, and custom Blender Python scripts receive the values and implement them as bone rotations on the 3D model.

Sensor Integration

I connected the MPU6050 IMU sensor to Arduino Uno following I2C protocol (VCC→5V, GND→GND, SDA→A4, SCL→A5). I programmed sensor reading logic in Arduino IDE, capturing accelerometer and gyroscope data, and implemented calibration routines to remove drift and offset errors.

The Custom B2 Spirit Model

Our team created a fully custom B2 Spirit stealth bomber model in Blender with proper geometry and topology. We exported it to Substance Painter for professional texturing including UV unwrapping, normal map baking, and applying realistic materials (metallic airframe, matte stealth coating, detailed panel lines).

Sophisticated Rigging System

I designed a rigging system with three main components:

The MAIN bone controls overall aircraft orientation, responding to primary pitch/roll/yaw inputs from the IMU sensor.

FLAP LEFT and FLAP RIGHT bones implement realistic flight control surfaces where rotation is inverse to aircraft roll—left bank raises the right flap and lowers the left flap, mimicking real aerodynamics.

Three bones per landing gear enable retraction/extension functionality for visual realism.

Overcoming Technical Challenges

Translating raw sensor output to Blender's coordinate system required understanding different axis conventions. I implemented coordinate transformation logic and addressed quaternion mathematics for smooth rotation interpolation without gimbal lock.

Establishing stable serial communication proved challenging. I debugged PySerial issues including COM port configuration, baud rate matching, data format consistency, and timing synchronization.

Real-Time Performance

The system achieved real-time responsiveness where physical IMU movements immediately translated to corresponding aircraft rotations in Blender with minimal perceptible latency, creating an immersive interactive experience.

I optimized performance through efficient data processing pipelines and optimized Blender scripting, maintaining smooth frame rates during active sensor input.

Team Collaboration

We distributed responsibilities strategically: hardware specialist handled Arduino programming and sensor setup, software developer implemented PySerial communication and Blender scripting, 3D artist created the model and rigging system, and project coordinator organized documentation and testing.

Learning Outcomes

This project taught me invaluable skills in sensor data processing, serial communication debugging, Blender rigging techniques, 3D modeling workflows, and hardware-software integration methodologies.

The experience demonstrated practical applications for interactive simulations in game development, training simulators, robotics visualization, and interactive installations.`,
        tags: ["Arduino", "Hardware Integration", "Blender", "3D Modeling", "IoT", "Team Project"],
        image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&h=500&fit=crop",
        technologies: ["Arduino Uno", "MPU6050 IMU Sensor", "Blender 3D", "PySerial 3.5", "Substance Painter", "I2C Protocol", "Quaternion Mathematics", "Python Serial Communication"],
        challenges: "Translating sensor output to Blender coordinates, establishing stable serial communication, debugging PySerial (COM port, baud rate, data format), bone rotation complexity, quaternion mathematics, joystick calibration, DIY hardware limitations, real-time latency, team coordination, 2-week timeline.",
        solutions: "I2C sensor integration, sensor calibration routines, three-stage data pipeline, coordinate transformation logic, sophisticated rigging (MAIN + FLAP bones), quaternion interpolation, professional 3D modeling workflow (Blender + Substance Painter), systematic testing, team specialization.",
        results: "Real-time responsiveness with minimal latency, professional B2 Spirit model with detailed texturing, functional rigging (3-axis control + inverse flaps + landing gear), stable PySerial communication, comprehensive documentation, demo videos, 4 team member reflections, 2-week completion.",
    },
    "emotion-classification-nlp": {
        id: "emotion-classification-nlp",
        title: "Emotion Classification from Video Transcripts",
        description: "NLP system for automated emotion detection in video transcripts using transformer-based deep learning for the Content Intelligence Agency",
        fullDescription: `I developed an advanced Natural Language Processing system for the Content Intelligence Agency to automatically classify emotions from video transcripts across seven categories: anger, disgust, fear, happiness, neutral, sadness, and surprise.

The Content Analysis Challenge

The Content Intelligence Agency needed to analyze emotional content at scale across diverse video formats including news broadcasts, interviews, and scripted content. Manual analysis was time-consuming and inconsistent.

Building the Enhanced Emotion Model

I built a custom hybrid architecture combining RoBERTa-Large transformer (355M parameters) with sentiment analysis and emotion count features. This approach leveraged RoBERTa's deep contextual understanding through 24 transformer layers and self-attention mechanisms while adding explicit emotional indicators.

The system processes a complete pipeline: video input → speech-to-text transcription → sentence-level emotion tagging → output file generation.

Tackling Class Imbalance

I immediately faced significant class imbalance. The dataset had 12,000 neutral samples and 10,000 happiness samples, but fewer than 1,000 samples each for anger, fear, and disgust.

This severe imbalance caused poor performance on minority emotions, with anger achieving only 0.26 F1-score and disgust missing entirely from initial results.

Transfer Learning Efficiency

I applied transfer learning, leveraging RoBERTa's pre-training on massive text corpora. This drastically reduced computational requirements while maintaining strong performance—critical for deploying at scale.

I trained on Google Colab's A100 GPU with early stopping to prevent overfitting and reduce energy consumption, demonstrating sustainable AI practices.

Comprehensive Preprocessing

I developed a preprocessing pipeline including punctuation removal for sentiment analysis, word splitting, strategic train/validation splits, feature extraction (sentiment scores and emotion word counts), feature scaling, label encoding, and text tokenization.

PyTorch Dataset and DataLoader enabled efficient batch processing during training.

Making AI Explainable

I implemented SHAP (SHapley Additive exPlanations) values to visualize token-level contribution to predictions. This showed which specific words drove the model's decisions.

For example, 'Kobe' had strong positive impact for happiness detection, while 'threatened' incorrectly drove a happiness prediction when sadness was correct—revealing areas for improvement.

Performance Patterns

The model showed interesting performance patterns related to text length. Accuracy was highest (74%) on very short texts (0-5 words) and optimal (71%) on medium texts (11-20 words), but dropped to 54% for long texts (40+ words).

This indicated difficulty maintaining context over longer sequences—a common challenge in NLP that points toward future improvements.

Strong Results on Common Emotions

The model excelled at detecting happiness (F1: 0.78) and neutral (F1: 0.73) emotions with high precision and recall. It showed strong performance on sadness (F1: 0.59) and surprise (F1: 0.50).

Overall accuracy reached 71% with F1-score of 0.72, demonstrating solid baseline performance for multi-class emotion classification.

Real-World Validation

I tested the system on a real-world 3m32s Fox News video, achieving ~76% correct predictions and ~88% acceptable predictions. This validated the model's practical applicability beyond the training domain.

Generalization testing across external datasets (GoEmotions, MELD, dutch_g1/g4/g23) showed varied performance, with particularly strong results on dutch_g23 (84% accuracy, 0.89 F1).

Processing Speed

The system successfully processed the complete pipeline in under 40 seconds, meeting real-time requirements for practical deployment in content analysis workflows.

Future Directions

I identified clear next steps: API wrapping for easy integration, language detection for multilingual support, result visualization dashboard, error analysis tools, and fine-tuning with domain-specific data for improved accuracy.`,
        tags: ["Python", "NLP", "Deep Learning", "Transformers", "Team Project"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        technologies: ["Python", "PyTorch", "RoBERTa-Large", "HuggingFace Transformers", "SHAP", "Google Colab A100", "scikit-learn", "Sentiment Analysis"],
        challenges: "Severe class imbalance (12k neutral, 10k happiness vs <1k anger/fear/disgust), text length degradation (74% → 54% accuracy), context-dependent sarcasm, domain shift with spontaneous speech, 30,524 samples across 7 emotions, transcript quality, sentence segmentation.",
        solutions: "Hybrid architecture (RoBERTa-Large + sentiment + emotion counts), transfer learning from massive corpora, comprehensive preprocessing pipeline, PyTorch efficient batching, A100 GPU training with early stopping, SHAP explainability, external dataset testing (GoEmotions, MELD, dutch datasets).",
        results: "71% overall accuracy, 0.72 F1-score, happiness (0.78) and neutral (0.73) excelled, sadness (0.59) and surprise (0.50) strong, <40s pipeline processing, 84% on dutch_g23, ~76% correct on Fox News video, clear length-accuracy patterns identified.",
    },
    "axonrooter-mlops-deployment": {
        id: "axonrooter-mlops-deployment",
        title: "AxonRooter: Production MLOps Pipeline & Deployment",
        description: "Enterprise-grade MLOps system with automated model retraining, Azure deployment, REST API, and comprehensive DevOps maturity implementation",
        fullDescription: `I engineered production-ready MLOps infrastructure for AxonRooter, transforming a research prototype into enterprise deployment for NPEC's automated plant phenotyping system.

The Production Challenge

Research code rarely works in production. I needed to transform experimental models into a reliable, automated system processing thousands of plant images 24/7 with comprehensive monitoring, error handling, and continuous improvement capabilities.

DevOps Maturity Framework

I implemented a complete DevOps maturity framework including automated model retraining triggered by incoming data volume, continuous integration and deployment on Azure, RESTful API with FastAPI, web application for data upload and annotation, comprehensive logging and monitoring, and professional documentation.

The Automated Retraining Pipeline

I built an end-to-end data pipeline where researchers upload new images through a web interface, images automatically queue for annotation, the system triggers model retraining when sufficient new samples accumulate, validates new model performance before deployment, and seamlessly deploys updated models without service interruption.

This closed-loop system enables continuous improvement as more data arrives, with zero manual intervention required.

Building the REST API

I built a FastAPI REST API with a '/predict/' endpoint accepting POST requests with images. The API returns JSON responses with root tip coordinates for up to 5 roots, implements proper HTTP status code handling (200 for success, 422 for missing files, 500 for inference failures), and includes comprehensive request validation.

Processing speed averages under 40 seconds per image, meeting real-time requirements for research workflows.

Comprehensive Logging Infrastructure

I developed a configurable logging system with multiple levels (DEBUG/INFO/WARNING/ERROR/CRITICAL) providing appropriate detail for different scenarios.

Dual output goes to both console and persistent file (logs/app.log) with timestamped entries tracking which modules generated each message.

DEBUG mode shows full execution trace for development, INFO monitors application flow in production, and WARNING/ERROR/CRITICAL provide issue alerting.

Package Distribution

I used Poetry for dependency management and created wheel package distribution. Researchers can install the complete system with a single pip command: pip install axonrooter- 0.1.0.whl.

This ensures reproducible deployments across different environments with consistent dependency versions.

Professional Documentation

I generated professional Sphinx documentation with complete API reference, usage examples, and deployment guides. The documentation is hosted on GitHub Pages, providing researchers with comprehensive installation instructions and integration guidance.

Azure Cloud Deployment

I deployed the system on Azure App Service with proper environment configuration, secure secrets management, automatic scaling based on load, and cost optimization strategies.

The deployment provides reliable 24/7 operation with appropriate monitoring and alerting for production issues.

Command-Line Interface

I created a CLI using argparse for local inference without requiring API calls. This serves power users who want to integrate AxonRooter into automated workflows or run batch processing locally.

Testing and Quality Assurance

I implemented a comprehensive test suite using pytest covering unit tests for individual functions and integration tests for complete workflows.

Automated testing runs in the CI/CD pipeline, ensuring code changes don't break existing functionality before deployment.

Achieving High DevOps Maturity

The system achieves high DevOps maturity with automated operations requiring minimal manual intervention. Model retraining happens automatically, deployment occurs seamlessly, monitoring alerts proactively, and documentation stays synchronized with code.

This represents mature DevOps practices enabling sustainable long-term operation and continuous improvement.

Real-World Impact

NPEC now processes thousands of plant images with a system that continuously improves through automated retraining. Researchers upload images naturally during daily work, and the system learns from this expanding dataset without requiring ML expertise from users.`,
        tags: ["Python", "MLOps", "Azure", "FastAPI", "CI/CD", "DevOps"],
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
        technologies: ["Python", "Azure App Service", "FastAPI", "Poetry", "Sphinx Documentation", "pytest", "GitHub Pages", "Docker", "Git/GitHub"],
        challenges: "Transforming research code to production, automated retraining pipeline design, model versioning without downtime, robust API error handling (422/500 codes), comprehensive logging without overwhelming operators, package distribution for reproducibility, Azure deployment complexity, 24/7 reliability requirements.",
        solutions: "Modular package structure (preprocessing/inference/API/CLI/utils), automated pipeline (monitor → trigger → validate → deploy), FastAPI REST API (/predict/ endpoint, JSON responses, 200/422/500 codes), configurable logging (DEBUG/INFO/WARNING/ERROR/CRITICAL, dual output), Poetry dependency management, Sphinx documentation on GitHub Pages, pytest test suite, Azure App Service deployment.",
        results: "High DevOps maturity, pip-installable package (axonrooter-0.1.0.whl), <40s API processing, automated retraining without downtime, configurable logging enabling rapid debugging, professional documentation site, Azure 24/7 operation, CLI for power users, comprehensive pytest coverage, processes thousands of images with continuous improvement.",
    },
};

// Helper to get projects as an array
export const projectsArray = Object.values(projectsData);