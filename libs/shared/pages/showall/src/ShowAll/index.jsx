// libs
import React from 'react';
import { List, Tag } from 'antd';
// style
import './style.scss';
// other
import { todos } from '@demo-org/shared/util/data-sources';

export const ShowAll = () => {
  return (
    <div className="show-all-wrapper">
      <div className="show-all-wrapper-inner">
        <h1 className="show-all-title"> All Todos</h1>
        <div className="show-all-body">
          <List
            className="todo-list"
            itemLayout="horizontal"
            dataSource={todos}
            renderItem={(item) => (
              <List.Item key={item.id} className="todo-item">
                <Tag className="todo-item-status" color={item.status.value}>
                  {item.status.label}
                </Tag>
                <h2 className="todo-item-title">{item.title} </h2>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};
