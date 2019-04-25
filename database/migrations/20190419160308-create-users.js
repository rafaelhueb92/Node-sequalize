module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }).then(() => queryInterface.addConstraint('Sales', ['userId'], {
      type: 'FOREIGN KEY',
      name: 'FK_sales_user', // useful if using queryInterface.removeConstraint
      references: {
        table: 'user',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'no action',
    }));;
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};