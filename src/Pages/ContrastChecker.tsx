import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, hexToRgb } from '@mui/material';
import { useEffect, useState } from 'react';
import { wcagContrastChecker } from '@mdhnpm/wcag-contrast-checker';
import { ElectricScooterSharp } from '@mui/icons-material';



export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [r1, changeR1] = useState("0")
  const [g1, changeG1] = useState("0")
  const [b1, changeB1] = useState("0")
  const [r2, changeR2] = useState("255")
  const [g2, changeG2] = useState("255")
  const [b2, changeB2] = useState("255")
  const [normalAA, setNormalAA] = useState<boolean>(true)
  const [largeAA, setLargeAA] = useState<boolean>(true)
  const [normalAAA, setNormalAAA] = useState<boolean>(true)
  const [largeAAA, setLargeAAA] = useState<boolean>(true)

  

  // Clear rgb and hex values on close
  const handleClose = () => {
    changeR1("0");
    changeG1("0");
    changeB1("0");
    changeR2("255");
    changeG2("255");
    changeB2("255");
    onClose(selectedValue);
  };

  
  // Function to read RGB numbers and return 
  function rgbToHex(r: number, g: number, b: number) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
   
  var hex1 = rgbToHex(Number(r1),Number(g1),Number(b1));
  var hex2 = rgbToHex(Number(r2),Number(g2),Number(b2));

  useEffect(() => {
    var constrast_check = wcagContrastChecker(hex1, hex2);
    if (constrast_check.largeText.aa == false) {
      setLargeAA(false)
    } else{
      setLargeAA(true)
    }

    if (constrast_check.regularText.aa == false) {
      setNormalAA(false)
    } else{
      setNormalAA(true)
    }

    if (constrast_check.largeText.aaa == false) {
      setLargeAAA(false)
    } else{
      setLargeAAA(true)
    }

    if (constrast_check.regularText.aaa == false) {
      setNormalAAA(false)
    } else{
      setNormalAAA(true)
    }

    console.log(constrast_check);
  }, [hex1, hex2]);
  
  
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Color Contrast Checker</DialogTitle>
      <Box 
        sx={{
        
            padding: 5
          }}
        >

        <div id="boxes">
            <div 
              id="aa-large"
              style={{
                backgroundColor: largeAA ? 'green' : 'red'
                
              }}
            >
            <span>Large Text</span>
            <span>WCAG AA</span>
            <span>{normalAAA ? "✓ Pass" : "✕ Fail"}</span>
            </div>
            <div 
              id="aa-normal"
              style={{
                backgroundColor: normalAA ? 'green' : 'red'
              }}
              >
            <span>Normal Text</span>
            <span>WCAG AA</span>
            <span>{normalAA ? "✓ Pass" : "✕ Fail"}</span>
            </div>
            
            <div 
              id="aaa-large"
              style={{
                backgroundColor: largeAAA ? 'green' : 'red'
              }}
              >
            <span>Large Text</span>
            <span>WCAG AAA</span>
            <span>{largeAAA ? "✓ Pass" : "✕ Fail"}</span>
            </div>
            <div 
              id="aaa-normal"
              style={{
                backgroundColor: normalAAA ? 'green' : 'red',
                content: normalAAA ? "✓ Pass" : "✕ Fail",
                
              }}
              
              >
            <span>Normal Text</span>
            <span>WCAG AAA</span>
            <span>{normalAAA ? "✓ Pass" : "✕ Fail"}</span>
            </div>
        </div>
        <div id="sample">
            <div contentEditable id="sample-text" 
            suppressContentEditableWarning={true}
            style={{
              backgroundColor: hexToRgb(hex2),
              color: hexToRgb(hex1),
            }}
            >
            Click to change demo text
            </div>
        </div>

        <div id="bars">
            <div>
                <h2>Foreground</h2>
                <div>
                    <label htmlFor="color-1-r" className="red">R</label> 
                    <input id="color-1-r" type="range" min="0" max="255" defaultValue= "0" onChange={e => changeR1(e.target.value)}/>
                    <input id="number-1-r" type="number" min="0" max="255" value={r1} readOnly/>
                </div>
                <div>
                    <label htmlFor="color-1-g" className="green">G</label> 
                    <input id="color-1-g" type="range" min="0" max="255" defaultValue= "0" onChange={e => changeG1(e.target.value)} />
                    <input id="number-1-g" type="number" min="0" max="255" value={g1} readOnly/>
                </div>
                <div>
                    <label htmlFor="color-1-b" className="blue">B</label> 
                    <input id="color-1-b" type="range" min="0" max="255" defaultValue= "0" onChange={e => changeB1(e.target.value)} />
                    <input id="number-1-b" type="number" min="0" max="255" value={b1} readOnly/>
                </div>
                <input id="color-1-hex" data-target="1" type="text" value={hex1} readOnly/>
                </div>
                <div>
                <h2>Background</h2>
                <div>
                    <label htmlFor="color-2-r" className="red">R</label> 
                    <input id="color-2-r" type="range" min="0" max="255" defaultValue= "255" onChange={e => changeR2(e.target.value)} />
                    <input id="number-2-r" type="number" min="0" max="255" value={r2} readOnly/>
                </div>
                <div>
                    <label htmlFor="color-2-g" className="green">G</label> 
                    <input id="color-2-g" type="range" min="0" max="255" defaultValue= "255" onChange={e => changeG2(e.target.value)} />
                    <input id="number-2-g" type="number"min="0" max="255" value={g2} readOnly/>
                </div>
                <div>
                    <label htmlFor="color-2-b" className="blue">B</label> 
                    <input id="color-2-b" type="range" min="0" max="255" defaultValue= "255" onChange={e => changeB2(e.target.value)} />
                    <input id="number-2-b" type="number" min="0" max="255" value={b2} readOnly/>
                </div>
                <input id="color-2-hex" data-target="2" type="text" value={hex2} readOnly/>
            </div>
        </div>

      </Box>
      
    </Dialog>
  );
}

export default SimpleDialog;