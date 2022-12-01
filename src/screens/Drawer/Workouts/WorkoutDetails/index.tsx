import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Heading,
  HStack,
  Modal,
  Pressable,
  Text,
  useTheme,
  View,
  VStack
} from 'native-base';
import { RootStackParamList } from '../../../../routes';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Button from '../../../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'WorkoutDetails'>;

const WorkoutDetails = ({ route }: Props) => {
  const [showWarning, setShowWarning] = useState(false);
  const { colors } = useTheme();
  const workout = route.params?.details;

  if (!workout) return;

  return (
    <>
      <VStack
        bg='background.0'
        flex={1}
        p={6}
      >
        <VStack
          bg='background.2'
          flex={1}
          px={4}
          borderRadius='2xl'
          space={2}
        >
          <View padding={6}>
            <Heading
              size='lg'
              color='background.10'
              alignSelf='center'
            >
              {workout.name}
            </Heading>
          </View>
          <Pressable
            alignSelf='flex-end'
            onPress={() => setShowWarning(true)}
          >
            <MaterialIcons
              name='delete-sweep'
              size={30}
              color={colors.background[10]}
            />
          </Pressable>
          <View>
            <HStack
              bg='background.4'
              p={2}
              borderTopRadius='lg'
              justifyContent='space-between'
            >
              <Text
                fontWeight={700}
                color='background.10'
                fontSize='lg'
              >
                Exercises
              </Text>
              <Text
                fontWeight={700}
                color='background.10'
                fontSize='lg'
              >
                RPE
              </Text>
              <Text
                fontWeight={700}
                color='background.10'
                fontSize='lg'
              >
                Sets
              </Text>
            </HStack>
            <HStack
              bg='background.6'
              justifyContent='space-between'
              p={2}
            >
              <Text
                fontSize='md'
                color='background.10'
              >
                {workout.compound.name}
              </Text>
              <Text
                fontSize='md'
                color='background.10'
              >
                {workout.compound.rpe}
              </Text>
              <Text
                fontSize='md'
                color='background.10'
              >
                {workout.compound.sets}
              </Text>
            </HStack>
            <HStack
              bg='background.6'
              justifyContent='space-between'
              p={2}
            >
              <Text
                color='background.10'
                fontSize='md'
              >
                {workout.accessories.name}
              </Text>
              <Text
                color='background.10'
                fontSize='md'
              >
                {workout.accessories.rpe}
              </Text>
              <Text
                color='background.10'
                fontSize='md'
              >
                {workout.accessories.sets}
              </Text>
            </HStack>
          </View>
        </VStack>
      </VStack>
      {showWarning && (
        <Modal
          isOpen={showWarning}
          bg='background.0'
          justifyContent='center'
        >
          <Modal.Content
            bg='background.0'
            justifyContent='center'
          >
            <Modal.Header
              bg='background.0'
              borderBottomWidth={0}
            >
              <Heading
                color='background.10'
                textAlign='center'
              >
                Are you sure?
              </Heading>
            </Modal.Header>
            <Modal.Body>
              <MaterialIcons
                name='delete'
                size={150}
                color={colors.red[500]}
              />
            </Modal.Body>
            <Modal.Footer
              bg='background.0'
              borderTopWidth={0}
            >
              <HStack>
                <Button onPress={() => setShowWarning(false)}>Cancel</Button>
                <Button>Delete</Button>
              </HStack>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
};

export default WorkoutDetails;
