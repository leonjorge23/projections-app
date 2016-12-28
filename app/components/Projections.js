var React = require('react');
var moment = require('moment');

var Projections = React.createClass({

    render: function(){
        var ProjBalance = 0;
        var arrangedTrans = this.props.transactions.sort(function (a, b){
            a = a.date;
            b = b.date;
            return a - b;
        })
        var transactions = arrangedTrans.map(function(trans, index){
            ProjBalance = ProjBalance - trans.expense + trans.income;
            var transDate = moment.unix(trans.date).format("M/D/YYYY");
            return (
                <tr key={index}>
                    <th>{trans.itemDes}</th>
                    <td>{transDate}</td>
                    <td>${trans.expense}</td>
                    <td>${trans.income}</td>
                    <td>${ProjBalance}</td>
                    <td>{trans.actualBal && trans.actualBal}</td>
                </tr>
            )
        })
        return (
            <table className="table table-striped">
                <thead>
                    <tr><th>Item Description</th><th>Date</th><th>Expense</th><th>Income</th><th>Projected Bal.</th><th>Actual Bal.</th></tr>
                </thead>
                <tbody>
                    {transactions}
                </tbody>
            </table>
        )
    }
});

module.exports = Projections;
