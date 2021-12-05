import styles from "./styles";
import { DefaultTheme } from '@react-navigation/native';

const themes = {
  calendarTheme: {
    backgroundColor: styles.container.backgroundColor,
    calendarBackground: styles.container.backgroundColor,
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#ffffff',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: 'white',
    indicatorColor: 'blue',
    //textDayFontFamily: 'Noteworthy',
    //textMonthFontFamily: 'Noteworthy',
    //textDayHeaderFontFamily: 'Noteworthy',
    //textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
},
navigationContainerTheme: {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3d97e0',
  },
  backgroundColor: styles.container.backgroundColor
}
}

  export default themes