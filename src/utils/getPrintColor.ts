export interface PrintColorInterface {
    backgroundColor: string;
    textColor: string;
}
export const getTemplateColor = (team: number) => {
    var output: PrintColorInterface;
    switch (team) {
        case 1:
            // RedBull
            return {
                backgroundColor: '#15185F',
                textColor: '#ffffff',
            }
        case 2:
            // McLaren
            return {
                backgroundColor: '#F18004',
                textColor: '#ffffff',
            }
        case 3:
            // Ferrari
            return {
                backgroundColor: '#FF0200',
                textColor: '#000000',
            }
        case 18:
            //Alfa Romero
            return {
                backgroundColor: '#990001',
                textColor: '#ffffff',
            }
        case 5:
            // Mercedes
            return {
                backgroundColor: '#01A09C',
                textColor: '#000000',
            }
        case 13:
            // Alpine
            return {
                backgroundColor: '#0D1C2C',
                textColor: '#ffffff',
            }
        case 7:
            // ALpha Tauri
            return {
                backgroundColor: '#012947',
                textColor: '#ffffff',
            }      
        case 12:
            // Williams
            return {
                backgroundColor: '#051D42',
                textColor: '#ffffff',
            }
        case 14:
            // Haas
            return {
                backgroundColor: '#ffffff',
                textColor: '#000000',
            }
        case 17:
            // Aston Martin F1 Team
            return {
                backgroundColor: '#24594E',
                textColor: '#FFFFFF',
            }
        default:
            return {
                backgroundColor: 'white',
                textColor: 'black',
            }
    }
    return output;
}
