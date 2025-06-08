import useCreateTravel from '@/src/modules/travel/hooks/useCreateTravel';
import NewTravelScreen from '@/src/modules/travel/screens/newTravel';

export default function NewTravel() {
  const { control, createNewTravel, errors, handleSubmit, isSubmitting } = useCreateTravel();

  return (
    <NewTravelScreen
      control={control}
      createNewTravel={createNewTravel}
      erros={errors}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />
  );
}