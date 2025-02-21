# portfolio-website
# Portfolio Website Deployment - DevOps CI/CD Pipeline

## 📌 Overview
This project automates the deployment of a personal **portfolio website** using a **CI/CD pipeline** with **Docker, Kubernetes, Jenkins, and GitHub Actions**.

## 🚀 Features
- **Containerized Deployment**: Uses **Docker** for frontend & backend.
- **CI/CD Automation**: Automates build, test, and deployment using **Jenkins** and **GitHub Actions**.
- **Kubernetes Deployment**: Uses **IBM Cloud Kubernetes** for scalability.
- **Version Control**: GitHub repository for collaborative development.

## 📁 Directory Structure
```plaintext
portfolio-website/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
├── .github/workflows/
│   ├── ci-cd-pipeline.yaml
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
└── README.md
