import {StyleSheet} from 'react-native';
import {colors, fonts, perfectSize} from '../../theme';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryBackgroundColor,
  },
  buttonContainer: {
    height: '8%',
    width: '70%',
    backgroundColor: colors.primaryLightColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: perfectSize(15),
  },
  buttonTitle: {
    fontSize: perfectSize(24),
    fontFamily: fonts.quicksandBold,
    color: colors.buttonTitleColor,
  },
  errorContainer: {
    width: '90%',
    backgroundColor: colors.errorPopupColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: perfectSize(10),
    padding: perfectSize(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16.0,
    elevation: 24,
    position: 'absolute',
  },
  errorText: {
    color: colors.primaryLightColor,
    fontFamily: fonts.quicksandBold,
    textAlign: 'center',
    fontSize: perfectSize(20),
  },
});
