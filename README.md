# clear-frame-ai-

# WordPress on GCP with Cloud Run

This project sets up a containerized WordPress site with:

- Local development using Docker Compose
- GitHub-triggered builds via Cloud Build
- Cloud Run deployment with each commit

## Run Locally
run `docker compose --env-file .env up`

## 🧰 Local Setup

```bash
git clone https://github.com/YOUR_USERNAME/wordpress-gcp-cloudrun.git
cd wordpress-gcp-cloudrun
docker-compose up -d


