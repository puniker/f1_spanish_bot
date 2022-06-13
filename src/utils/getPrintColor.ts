export interface PrintColorInterface {
    backgroundColor: string;
    textColor: string;
}
export const getTemplateColor = (team: number) => {
    var output: PrintColorInterface;
    switch (team) {
        case 1:
            return {
                backgroundColor: '#15185F',
                textColor: '#ffffff',
            }
        case 2:
            return {
                backgroundColor: '#CB0001',
                textColor: '#ffffff',
            }
        case 3:
            return {
                backgroundColor: '#FF0200',
                textColor: '#000000',
            }
        case 18:
            return {
                backgroundColor: '#990001',
                textColor: '#ffffff',
            }
        case 5:
            return {
                backgroundColor: '#01A09C',
                textColor: '#000000',
            }
        case 13:
            return {
                backgroundColor: '#0D1C2C',
                textColor: '#ffffff',
            }
        case 7:
            return {
                backgroundColor: '#012947',
                textColor: '#ffffff',
            }      
        case 12:
            return {
                backgroundColor: '#051D42',
                textColor: '#ffffff',
            }
        case 14:
            return {
                backgroundColor: '#ffffff',
                textColor: '#000000',
            }
        case 10:
            return {
                backgroundColor: '',
                textColor: '',
            }
        default:
            return {
                backgroundColor: 'red',
                textColor: 'white',
            }
    }
    return output;
}
