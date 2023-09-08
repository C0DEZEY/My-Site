export default function Bubbles({invert}) {
  let arrayy = [10, 32, 23, 24, 75, 66, 47, 67, 49, 85];
  let arrayx = [1, 3, 10, 20, 9, 15, 20, 3, 4, 6];
  if(invert) {
       arrayx = [16,4,8,20,15,9,25,1,3,1]
  } 
 
  const bubbles = [];

  for (let i = 0; i < 10; i++) {
      bubbles.push(
        <div
          key={i}
          style={{
            background: 'rgba(128, 140, 249, 0.05)',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: `${arrayy[i]}vh`,
            left: `${arrayx[i]}vw`,
          }}
        ></div>
      );
    }
  

  const divstyle = {
    position: 'absolute',
    right: '35vw',
    width: 'auto',
    height: 'auto',
  };

  return <div style={divstyle}>{bubbles}</div>;
}
