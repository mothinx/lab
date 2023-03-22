import React from 'react';
import './RelationDiff.css';

export interface Relation {
  source: string;
  end_date: string;
  start_date: string;
  details: string;
}

interface RelationDiffProps {
  initialValues: Relation;
  newValues: Relation;
}

const RelationDiff: React.FC<RelationDiffProps> = ({ initialValues, newValues }) => {
  const keys = Object.keys(initialValues) as (keyof Relation)[];

  const keysNotWanted = new Set(['source']);
  const filteredKeys = keys.filter((key) => !keysNotWanted.has(key));

  const renderDifferenceCell = (key: keyof Relation) => {
    if (initialValues[key] === newValues[key]) {
      return initialValues[key];
    }

    return (
      <>
        <span className="old-value">{initialValues[key]}</span>
        <span className="new-value">{newValues[key]}</span>
      </>
    );
  };


  return (
    <table className="relation-diff">
      <tbody>
        {filteredKeys.map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{renderDifferenceCell(key)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RelationDiff;
