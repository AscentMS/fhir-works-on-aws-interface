/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

export class BadRequestError extends Error {
    readonly isBadRequestError: boolean;

    constructor(message = 'Bad Request') {
        // Node Error class requires passing a string message to the parent class
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.name = this.constructor.name;
        this.isBadRequestError = true;
    }
}
export function isBadRequestError(error: unknown): error is BadRequestError {
    return Boolean(error) && (error as BadRequestError).isBadRequestError === true;
}
