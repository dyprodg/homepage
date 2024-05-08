const AWS = require('aws-sdk');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Method not allowed'),
        };
    }

    try {
        const { name, email, message } = JSON.parse(event.body);
        const ses = new AWS.SES();
        const params = {
            Destination: {
                ToAddresses: ['info@dennisdiepolder.com'] 
            },
            Message: {
                Body: {
                    Text: {
                        Data: `
                        Neue Email von meiner Homepage Dennis Diepolder\n
                        Name: ${name}\n
                        Email: ${email}\n
                        Message: ${message}`
                    }
                },
                Subject: {
                    Data: `Neue Nachricht von ${name} von der Homepage Dennis Diepolder`
                }
            },
            Source: 'info@dennisdiepolder.com'
        };

        await ses.sendEmail(params).promise();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Email send successfully'),
        };
    } catch (error) {
        console.error(`Error: ${error}`);

        return {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Bad request'),
        };
    }
};