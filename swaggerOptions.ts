import path from "path";

export const swaggerOptions = {
    swaggerDefinition : {
        openapi: '3.0.0',
        info: {
            title: 'API Country',
            version: '1.0.0',
            description: 'L\'API Country permet de récupérer les information d\'un pays avec différent paramètre : code du pays, nom du pays et capital du pays',
        },
        servers :[
            {
                url: 'http://localhost:3001',
                description: 'server local'
            }
        ]
    },
    apis: [path.resolve(__dirname, './controllers/*.ts')]
}