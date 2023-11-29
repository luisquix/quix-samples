/**
 * Telemetry Query API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Defines aggregation functions supported by Quix.TelemetryQuery.Contract.Requests.EventData.GetEventDataRequest.
 */
export type EventDataAggregationType = 'None' | 'First' | 'Last' | 'Count';

export const EventDataAggregationType = {
    None: 'None' as EventDataAggregationType,
    First: 'First' as EventDataAggregationType,
    Last: 'Last' as EventDataAggregationType,
    Count: 'Count' as EventDataAggregationType
};