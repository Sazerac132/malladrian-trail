import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { SystemStore } from '../../../types';
import { leaveGameThunk } from '../../../Store/GameSlice';

const Already: React.FC = () => {
  const dispatch = useDispatch();
  const { id, isGm, name, codeword } = useSelector(
    (store: SystemStore) => store.game.data
  );

  const triggerLeave = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    dispatch(leaveGameThunk());
  };

  return (
    <div className="already">
      <h2>Currently playing {name}.</h2>
      {isGm && (
        <div>
          You are the GM. Pass this to other people so they can join.
          <ul>
            <li>
              Game ID: <strong>{id}</strong>
            </li>
            {codeword && (
              <li>
                Codeword: <strong>{codeword}</strong>
              </li>
            )}
          </ul>
        </div>
      )}
      <div>
        You can&nbsp;
        <Link to="/game/play">
          <button type="button">continue</button>
        </Link>
        &nbsp;to play the game.
      </div>
      <div className="already__note">
        Alternatively, you can&nbsp;
        <button onClick={triggerLeave} type="button">
          leave
        </button>
        &nbsp;to create or join another.
      </div>
    </div>
  );
};

export default Already;
