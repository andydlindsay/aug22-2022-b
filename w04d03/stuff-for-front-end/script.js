$(() => {

  const $container = $('#container');

  const fetchDonuts = () => {
    $.ajax({
      type: 'GET',
      url: '/donuts',
      success: (data) => {
        console.log(data);
        setTimeout(() => {
          $container.empty();

          for (const donut of data) {
            const $donut = renderDonut(donut);
            $container.prepend($donut);
          }
        }, 2000);    
      }
    });
  };

  fetchDonuts();

  

  // const donuts = [
  //   {
  //     name: 'Long John',
  //     filling: 'custard',
  //     flavour: 'chocolate flakes',
  //     sprinkles: false
  //   },
  //   {
  //     name: 'Matcha',
  //     filling: 'matcha',
  //     flavour: 'tea',
  //     sprinkles: true
  //   } 
  // ];

  const renderDonut = (donut) => {
    const $donut = $(`
      <div class="donut">
        <h2>Name: ${donut.name}</h2>
        <h3>Filling: ${donut.filling}</h3>
        <h3>Flavour: ${donut.flavour}</h3>
        <h3>Sprinkles: ${donut.sprinkles ? '✅' : '❌'}</h3>
      </div>
    `);
    
    return $donut;
  };

  // grab the donut form
  const $form = $('#new-donut');

  $form.on('submit', (event) => {
    event.preventDefault();

    const serializedData = $form.serialize();
    console.log(serializedData);

    $.post('/donuts', serializedData, (response) => {
      console.log(response);
    });

    fetchDonuts();
  });

  // for (const donut of donuts) {
  //   const $donut = renderDonut(donut);
  //   $container.append($donut);
  // }

  // $container.prepend($donut);

  // $donut.appendTo($container);
  // $donut.prependTo($container);

});
