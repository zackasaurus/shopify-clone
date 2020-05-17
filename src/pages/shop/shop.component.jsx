import React from 'react';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

export const ShopPage = () => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
