# Quix Datalake Sink

[This connector](https://github.com/quixio/quix-samples) streams data from a Kafka topic into the Quix Data Lake.

## How to run

Create or log in to your Quix account and open **Connectors → Add connector → Quix Datalake Sink**.  
Click **Set up connector**, complete the parameters below, then **Test connection & deploy**.

> *Managed service* – the container image is hosted and operated by Quix. You only supply configuration; no Docker, servers, or updates to manage.

## Environment variables

The connector recognises these parameters:

- **topic** – Kafka topic to consume (**required**)
- **avroCompression** – Avro codec (`snappy` | `gzip`, default `snappy`)
- **indexRowCount** – Rows per Avro index file (default `1000`)
- **datacatalogRequestTimeout** – Data Catalog API timeout in seconds (default `5`)
- **commitTimeInterval** – Seconds between commits (default `60`)
- **commitMsgInterval** – Messages between commits (default `0`)
- **logLevel** – Logging level (`INFO` | `DEBUG`, default `INFO`)
- **consumerGroup** – Kafka consumer-group ID (optional)
- **autoOffsetReset** – Offset reset strategy (`latest` | `earliest`, default `latest`)
- **maxWorkers** – Parallel sink worker threads (default `5`)
