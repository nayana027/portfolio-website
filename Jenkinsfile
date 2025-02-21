pipeline {
    agent any

    environment {
        DOCKER_IMAGE_FRONTEND = 'portfolio-frontend'
        DOCKER_IMAGE_BACKEND = 'portfolio-backend'
        REGISTRY_URL = 'us.icr.io/nayana'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-username/portfolio-deployment.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker build -t $REGISTRY_URL/$DOCKER_IMAGE_FRONTEND ./frontend'
                    sh 'docker build -t $REGISTRY_URL/$DOCKER_IMAGE_BACKEND ./backend'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    sh 'docker push $REGISTRY_URL/$DOCKER_IMAGE_FRONTEND'
                    sh 'docker push $REGISTRY_URL/$DOCKER_IMAGE_BACKEND'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh '''
                    kubectl apply -f k8s/frontend-deployment.yaml
                    kubectl apply -f k8s/backend-deployment.yaml
                    '''
                }
            }
        }
    }
}
