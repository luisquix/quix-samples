# Quix Datalake Sink

[This connector](https://www.google.com/search?q=Quix+Datalake+Sink) streams data from a Kafka topic into the [Quix Data Lake](https://www.google.com/search?q=Quix+Data+Lake).

## Managed service

The container image is hosted and operated by Quix. Simply configure the parameters below in the **Connectors → Add connector → Quix Datalake Sink** wizard; Quix provisions, scales, and updates the service for you—no Dockerfile, cluster, or runtime maintenance on your side.

## Parameters

| Name (camelCase)          | Description                                               | Required | Default / Options            |
|---------------------------|-----------------------------------------------------------|----------|------------------------------|
| `topic`                   | Kafka topic to consume                                    | ✔️       | —                            |
| `avroCompression`         | Avro codec (`snappy` \| `gzip`)                          | ❌       | `snappy`                     |
| `indexRowCount`           | Rows per Avro index file                                  | ❌       | `1000`                       |
| `datacatalogRequestTimeout` | Catalog API timeout (seconds)                          | ❌       | `5`                          |
| `commitTimeInterval`      | Seconds between commits                                   | ❌       | `60`                         |
| `commitMsgInterval`       | Messages between commits                                  | ❌       | `0`                          |
| `logLevel`                | Logging level (`INFO` \| `DEBUG`)                        | ❌       | `INFO`                       |
| `consumerGroup`           | Kafka consumer-group ID                                   | ❌       | —                            |
| `autoOffsetReset`         | Offset reset policy (`latest` \| `earliest`)             | ❌       | `latest`                     |
| `maxWorkers`              | Parallel sink worker threads                              | ❌       | `5`                          |
