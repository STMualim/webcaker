import moment from "moment";
import 'moment/locale/id'
moment.locale('id')

export function formattedDate(date: string){
    return moment(date).fromNow()
}