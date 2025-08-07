# Configuration Manager

[This service](https://github.com/quixio/quix-samples) exposes REST endpoints for creating, versioning and distributing JSON configurations, with automatic version control and Kafka-based change notifications.

## How to run

Create or log in to your Quix account and navigate to **Services → Add service → Configuration Manager API**.  
Click **Set up service**, complete the parameters below, then **Deploy**.

> **Managed service** – Quix hosts and operates the container. No Dockerfiles, servers or runtime maintenance required.

## Environment variables

The service recognises the following camel-case parameters:

- **topic**: Kafka topic for configuration updates (Required: `True`)
- **consumerGroup**: Kafka consumer-group identifier (Default: `config-api-v1`)
- **mongoDatabase**: MongoDB database name (Required: `True`)
- **mongoCollection**: MongoDB collection name (Required: `True`)
- **mongoUrlSecret**: MongoDB connection URL (*secret*, Required: `True`)
- **workers**: Number of worker processes (Default: `1`)
- **port**: API port (Default: `80`)
- **contentStore**: Where to store configuration content (`mongo` | `file`, Default: `mongo`)
