import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, Pressable } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { RootStackParamList } from '../../routes';

type Props = {
  item: any;
  onNavigate: () => void;
};

const NavigationCard = ({ item, onNavigate }: Props) => {

  return (
    <>
      <Pressable
        onPress={onNavigate}
        bg='background.2'
        p={3}
        borderRadius='xl'
      >
        <HStack
          justifyContent='space-between'
          alignItems='center'
        >
          <Heading color='background.10'>{item.name}</Heading>
          <AntDesign
            name='rightcircle'
            size={24}
            color='background.10'
          />
        </HStack>
      </Pressable>
    </>
  );
};

export default NavigationCard;
