export const getTextDate = (date: Date) => {
   let dateMonthText: string = '';
   switch (date.getMonth() + 1) {
	  case 1:
		 dateMonthText = 'January';
		 break;
	  case 2:
		 dateMonthText = 'February';
		 break;
	  case 3:
		 dateMonthText = 'March';
		 break;
	  case 4:
		 dateMonthText = 'April';
		 break;
	  case 5:
		 dateMonthText = 'May';
		 break;
	  case 6:
		 dateMonthText = 'June';
		 break;
	  case 7:
		 dateMonthText = 'July';
		 break;
	  case 8:
		 dateMonthText = 'August';
		 break;
	  case 9:
		 dateMonthText = 'September';
		 break;
	  case 10:
		 dateMonthText = 'October';
		 break;
	  case 11:
		 dateMonthText = 'November';
		 break;
	  case 12:
		 dateMonthText = 'December';
		 break;
   }
   return `${dateMonthText} ${date.getDate()}, ${date.getFullYear()}`;
};