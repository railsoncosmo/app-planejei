import useCreateTravel from '@/src/app/modules/travel/hooks/useCreateTravel';
import NewTravelScreen from '@/src/app/modules/travel/new';

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