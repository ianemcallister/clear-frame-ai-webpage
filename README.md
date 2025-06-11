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
```

## When Cloning
1. Include generate a new .env file with the following variables
```bash
CFA_WP_DB_HOST=cloudsqlproxy
CFA_WP_DB_PORT=3306
CFA_WP_DB_USER=[YOUR-USERNAME]
CFA_WP_DB_PASS=[YOUR-SECRET-PASSWORD]
CFA_WP_DB_NAME=wordpress
```

Service account must have cloud permissions for
1. Cloud SQL Client
2. Secret Manager Secret Access


Make sure that the comput engine has all the required permissions

In order to have mysql access in GCP we need to use a VPC network
1. Create a VPC netowrk
2. Create cloud sql instance