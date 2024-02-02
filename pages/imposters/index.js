import ShowList from '../../comps/ShowList';
import { useGlobalContext } from '../../public/context';

const Imposters = () => {
  const { imposters, isPending } = useGlobalContext();
  return (
    <div>
      <h1>רשימת המתחזים</h1>
      {isPending && <div>טוען...</div>}
      {imposters && <ShowList imposters={imposters} isPending={isPending} />}
    </div>
  );
};

export default Imposters;
