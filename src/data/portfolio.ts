// Sources: public repository READMEs/descriptions and public/resume.pdf, reviewed October 6, 2026.
export const portfolioProjects = [
  {
    "slug": "tf-rag",
    "title": "TensorFlow-RAG",
    "category": "AI & machine learning",
    "stack": [
      "Python",
      "FastAPI",
      "ChromaDB",
      "ONNX",
      "Claude",
      "Docker"
    ],
    "description": [
      "A question-answering application built around the official TensorFlow documentation. Documents are divided into token-aware chunks that preserve code blocks, embedded locally, and retrieved through ChromaDB. Claude uses that context to produce answers with source citations.",
      "Distance thresholds help reject questions outside the documentation. The project includes a browser interface, API endpoints, a Docker build, and an evaluation workflow. Replacing the PyTorch embedding stack with ONNX reduced idle memory by 61%, from 465 MB to 180 MB; the résumé documents a 23-question testing suite with pytest and GitHub Actions."
    ],
    "repository": "https://github.com/nicolasarmientor/tf-rag"
  },
  {
    "slug": "fed-fighter",
    "title": "FedFighter",
    "category": "AI & machine learning",
    "stack": [
      "Python",
      "PyTorch",
      "Flower",
      "CNN-LSTM"
    ],
    "description": [
      "A research project investigating intrusion detection across distributed nodes without collecting their raw training data in one place. A hybrid CNN-LSTM model learns from CICIDS2017 network-flow features, while Flower coordinates local training and model aggregation.",
      "The experiments compare a centralized baseline with FedAvg and FedProx, including non-IID client data. The résumé reports 92.4% classification accuracy for FedAvg in a five-client, ten-round experiment. The avionics setting is a research motivation; these experiments do not establish operational aircraft performance."
    ],
    "repository": "https://github.com/nicolasarmientor/fed-fighter"
  },
  {
    "slug": "financial-sentiment-nlp",
    "title": "Financial Sentiment Analyzer",
    "category": "AI & machine learning",
    "stack": [
      "Python",
      "FastAPI",
      "FinBERT",
      "Transformers",
      "Plotly",
      "TwelveData"
    ],
    "description": [
      "A web application that classifies financial headlines as positive, negative, or neutral using FinBERT through Hugging Face Transformers. Users enter a headline and a stock ticker to see sentiment and confidence alongside market information.",
      "The FastAPI backend retrieves prices through TwelveData and calculates stock returns. Interactive Plotly charts show 30-day price history, connecting the language-model output with a visual view of market movement without claiming to predict investment returns."
    ],
    "repository": "https://github.com/nicolasarmientor/financial-sentiment-nlp"
  },
  {
    "slug": "weather-dashboard-web",
    "title": "Weather Dashboard",
    "category": "Web applications",
    "stack": [
      "C#",
      "ASP.NET Core",
      "HttpClient",
      "OpenWeather"
    ],
    "description": [
      "A responsive weather application that accepts a city, optional state, and country code. Geocoding resolves the location before the application retrieves temperature, humidity, wind, and current conditions from OpenWeather.",
      "The C# backend uses HttpClient and async/await for external requests, with API keys supplied through environment configuration. Case-insensitive inputs and formatted location names make searches more forgiving. The repository credits Nicolas with the backend and integration, with AI assistance for the frontend."
    ],
    "repository": "https://github.com/nicolasarmientor/weather-dashboard-web"
  },
  {
    "slug": "AI4DrugDesign",
    "title": "AI4DrugDesign",
    "category": "AI & machine learning",
    "stack": [
      "Python",
      "RDKit",
      "AutoDock Vina",
      "ChEMBL",
      "Gradio"
    ],
    "description": [
      "An interactive computational drug-discovery pipeline that starts with a protein target and searches, filters, docks, and ranks candidate molecules. The standard workflow retrieves known bioactives from ChEMBL; the GrowMax workflow generates candidates by extending molecular fragments.",
      "RDKit handles molecular properties and conformers, while AutoDock Vina evaluates docking. The application adds ADME filters, parallel docking workers, ranked tables, and molecular and receptor–ligand visualizations. AI-assisted analysis provides structural suggestions for computational exploration."
    ],
    "repository": "https://github.com/nicolasarmientor/AI4DrugDesign"
  },
  {
    "slug": "ai-final-project",
    "title": "Chicken Freshness Prediction",
    "category": "AI & machine learning",
    "stack": [
      "Python",
      "Linear regression",
      "Logistic regression",
      "Naïve Bayes",
      "Random forest"
    ],
    "description": [
      "A team project exploring non-destructive estimates of chicken freshness from volatile organic compound profiles collected with an electronic-nose system. The workflow uses VOC features and sample metadata to estimate microbial load and classify samples as fresh, moderate, or spoiled.",
      "The repository contains separate training, inference, and evaluation workflows for regression and classification models, with confusion matrices and extended validation outputs. The project credits Nicolas with code implementation and modeling, alongside collaborators responsible for data collection, reporting, modeling, and visualization."
    ],
    "repository": "https://github.com/nicolasarmientor/ai-final-project"
  },
  {
    "slug": "diabetes-regression",
    "title": "Diabetes Regression Explorer",
    "category": "AI & machine learning",
    "stack": [
      "Python",
      "FastAPI",
      "scikit-learn",
      "Matplotlib",
      "Seaborn"
    ],
    "description": [
      "A FastAPI application for training and comparing linear regression models on the scikit-learn diabetes dataset. Model evaluation produces RMSE and R² measurements that can be reviewed through the browser.",
      "The reporting workflow creates JSON results and a PDF with feature correlations and model-comparison charts. The interface embeds both reports. The repository credits Nicolas with the backend, machine-learning, and plotting logic, with AI-assisted enhancements and frontend generation."
    ],
    "repository": "https://github.com/nicolasarmientor/diabetes-regression"
  },
  {
    "slug": "imdb-sentiment-analysis",
    "title": "IMDB Sentiment Analysis",
    "category": "AI & machine learning",
    "stack": [
      "Python",
      "TF-IDF",
      "Logistic regression",
      "Streamlit"
    ],
    "description": [
      "A Python sentiment-analysis application that classifies movie reviews as positive or negative. TF-IDF converts review text into numeric features for a logistic-regression classifier.",
      "A Streamlit interface provides a way to interact with the model. The project focuses on a conventional text-classification pipeline and a browser-based demonstration of its predictions."
    ],
    "repository": "https://github.com/nicolasarmientor/imdb-sentiment-analysis"
  },
  {
    "slug": "lunar-lander",
    "title": "LunarZ Hopper",
    "category": "Aerospace & simulation",
    "stack": [
      "SolidWorks",
      "MATLAB",
      "Finite element analysis"
    ],
    "description": [
      "An Auburn aerospace capstone concept for a reusable crewed lunar lander traveling between Gateway and the lunar surface. The repository brings together subsystem part files, a complete SolidWorks assembly, and structural-analysis results.",
      "Nicolas is credited with CAD and structural analysis. The work includes MATLAB sizing of frames and stiffeners, assembly-level structural simulations, and separate pressure analyses for propellant tanks. This is a design and simulation project, with engineering assumptions and results documented in the repository."
    ],
    "repository": "https://github.com/nicolasarmientor/lunar-lander"
  },
  {
    "slug": "Rocket-Finite-Element-Analysis",
    "title": "Rocket Finite Element Analysis",
    "category": "Aerospace & simulation",
    "stack": [
      "Python",
      "Finite element analysis"
    ],
    "description": [
      "A Python implementation of finite element analysis for a proposed rocket cross-section. The project expresses the analysis in code so that the calculation can be inspected and adapted.",
      "The repository describes the geometry and analysis as hard-coded. It is an engineering calculation project centered on a specific cross-section rather than a general-purpose simulation package."
    ],
    "repository": "https://github.com/nicolasarmientor/Rocket-Finite-Element-Analysis"
  },
  {
    "slug": "Standard-Atmosphere-Table",
    "title": "Standard Atmosphere Table",
    "category": "Aerospace & simulation",
    "stack": [
      "MATLAB",
      "CSV"
    ],
    "description": [
      "A MATLAB project that calculates atmospheric properties across an altitude range and presents the results as graphs. The calculated table is also exported as a CSV file.",
      "The work combines numerical calculation, visualization, and a reusable tabular output for atmospheric analysis."
    ],
    "repository": "https://github.com/nicolasarmientor/Standard-Atmosphere-Table"
  },
  {
    "slug": "pdf-text-to-speech",
    "title": "PDF to Speech",
    "category": "Web applications",
    "stack": [
      "Python",
      "FastAPI",
      "pypdf",
      "OpenAI TTS"
    ],
    "description": [
      "A FastAPI application that turns text from an uploaded PDF into downloadable MP3 audio. Users choose a voice, submit a document, and receive speech generated through the OpenAI text-to-speech API.",
      "The backend extracts text with pypdf and coordinates audio generation. The repository documents Nicolas’s work on PDF extraction, backend logic, API integration, and parts of the interface, with AI assistance for styling and selected enhancements."
    ],
    "repository": "https://github.com/nicolasarmientor/pdf-text-to-speech"
  },
  {
    "slug": "movie-random-generator",
    "title": "Random Movie Generator",
    "category": "Web applications",
    "stack": [
      "Python",
      "FastAPI",
      "SQLite",
      "SQLAlchemy",
      "Jinja2"
    ],
    "description": [
      "A web application for discovering randomly selected films from an IMDB movie dataset. A SQLite database stores the catalog, and server-rendered cards display titles, ratings, genres, summaries, and poster links.",
      "The project includes CSV loading, database models, and a FastAPI application. Nicolas’s documented contributions include backend logic, data cleaning, and loading the dataset into SQLite; the frontend incorporates AI-generated templates and styling."
    ],
    "repository": "https://github.com/nicolasarmientor/movie-random-generator"
  },
  {
    "slug": "morse-code-translator",
    "title": "Morse Code Translator",
    "category": "Web applications",
    "stack": [
      "Python",
      "Flask",
      "CSV"
    ],
    "description": [
      "A Flask application that translates text into Morse code and decodes Morse code back into text. A CSV reference supplies the character mappings used by the translation logic.",
      "The interface supports copying results, clearing the input and output, and switching between dark and light themes. Nicolas implemented the Flask backend and reference data, with AI assistance for interface enhancements and styling."
    ],
    "repository": "https://github.com/nicolasarmientor/morse-code-translator"
  },
  {
    "slug": "Multi-Thread-Chat-Bot",
    "title": "Multithreaded Chat Bot",
    "category": "Programming fundamentals",
    "stack": [
      "C++",
      "Threads",
      "Semaphores"
    ],
    "description": [
      "A C++ chatbot with a predefined set of responses. The project uses a multithreaded design to practice coordinating concurrent work.",
      "Its learning focus is mutual exclusion and semaphores: managing access to shared resources while multiple threads execute."
    ],
    "repository": "https://github.com/nicolasarmientor/Multi-Thread-Chat-Bot"
  },
  {
    "slug": "Trivia-Game",
    "title": "Trivia Game",
    "category": "Programming fundamentals",
    "stack": [
      "C++",
      "Linked lists"
    ],
    "description": [
      "A C++ trivia game that allows users to supply their own questions. The game applies linked-node lists to organize its question data.",
      "The project is a focused exercise in data structures, user input, and the flow of an interactive question-and-answer program."
    ],
    "repository": "https://github.com/nicolasarmientor/Trivia-Game"
  },
  {
    "slug": "Youtube-To-MP3",
    "title": "YouTube to MP3",
    "category": "Programming fundamentals",
    "stack": [
      "Python"
    ],
    "description": [
      "A small Python utility that extracts the audio from a YouTube video and saves it as an MP3 file.",
      "The project focuses on an input-to-output media workflow: taking a video source and producing a local audio file."
    ],
    "repository": "https://github.com/nicolasarmientor/Youtube-To-MP3"
  }
];
