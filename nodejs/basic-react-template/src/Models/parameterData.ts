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
 * Telemetry data payload contract.
 */
export interface ParameterData { 
    /**
     * Collection of timestamps. (Timestamps column).
     */
    timestamps?: Array<number>;
    /**
     * Numeric parameters values. This a dictionary of parameter to parameter values.
     */
    numericValues?: { [key: string]: Array<number>; };
    /**
     * String parameters values. This a dictionary of parameter to parameter values.
     */
    stringValues?: { [key: string]: Array<string>; };
    /**
     * Binary parameters values. This a dictionary of parameter to parameter values.
     */
    binaryValues?: { [key: string]: Array<string>; };
    /**
     * Tag values. If data are requested grouped by some tag, this tag will be returned here.
     */
    tagValues?: { [key: string]: Array<string>; };

    streamId:string;
}
