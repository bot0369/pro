import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../store/action/player-action";

const Raiders = () => {
  const dispatch = useDispatch();

  const {
    players = [],
    status,
    error,
  } = useSelector((state) => state.player || {});

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  return (
    <div className="p-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="text-red-600">{error}</p>}
      {status === "succeeded" && players.length === 0 && (
        <p>No players found.</p>
      )}
      {status === "succeeded" &&
        players.map((player) => (
          <div key={player.id}>
            <img
              src={player.profile_image}
              alt={player.name}
              className="w-90 h-90 mx-auto"
            />
            <h2 className="mt-2 text-lg font-bold text-center">
              {player.name}
            </h2>
            <p className="mt-2 text-md  text-center">{player.position}</p>
          </div>
        ))}
      {console.log("players", players)}
    </div>
  );
};

export default Raiders;
