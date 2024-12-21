import WidgetItem from '../Components/WidgetItem';

const Dashboard = () => {
  return (
    <div className=''>
      <div className='my-10 flex justify-between gap-14'>
        <WidgetItem
          heading='Revenue'
          value={340000}
          percent={40}
          color='rgb(0,155,255)'
          amount={true}
        />
        <WidgetItem
          heading='Users'
          value={400}
          percent={-14}
          color='rgb(0,198,202)'
          amount={false}
        />
        <WidgetItem
          heading='Transactions'
          value={23000}
          percent={80}
          color='rgb(255,196,0)'
          amount={true}
        />
        <WidgetItem
          heading='Products'
          value={1000}
          percent={30}
          color='rgb(75,0,255)'
          amount={true}
        />
      </div>

      <div className='flex gap-10 h-3/4'>
        {/* <RevenueChart />
            <Inventory /> */}
      </div>

      <div className='mt-10 h-2/4 flex gap-10'>
        {/* <GenderRatio />
            <TransactionTable /> */}
      </div>
    </div>
  );
};

export default Dashboard;
