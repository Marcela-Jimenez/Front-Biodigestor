import { useEffect, useState } from 'react';
import Trash from '../../assets/icons/Trash';
import {
  CreateBiodigestores,
  DeleteBiodigestores,
  GetBiodigestores,
} from '../../services/biodigestor.service';
import { useNavigate } from 'react-router-dom';
import { Plus } from '../../assets/icons/Plus';
import Swal from 'sweetalert2';

export const Biodigestor = () => {
  const [biodigestores, setBiodigestores] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    GetBiodigestores().then((result) => {
      setBiodigestores(result);
    });
  }, []);

  const handleAdd = () => {
    Swal.fire({
      title: 'Ingrese el nombre del nuevo biodigestor',
      input: 'text',
      inputPlaceholder: 'La Esperanza',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Agregar',
      cancelButtonText: 'Cancelar',
      preConfirm: async (data) => {
        Swal.showLoading();
        CreateBiodigestores(data).then((result) => {
          setBiodigestores((state) => [...state, result]);
          Swal.hideLoading();
        });
      },
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {biodigestores.map((item) => (
          <div
            key={item.bgrId}
            className="bg-white rounded-lg shadow px-4 py-12 text-center relative cursor-pointer hover:bg-gray-100"
            onClick={() => {
              navigate(`${item.bgrNombre}/${item.bgrId}`);
            }}
          >
            <i
              onClick={(e) => {
                e.stopPropagation();
                DeleteBiodigestores(item.bgrId);
              }}
            >
              <Trash className="text-[#C2CFE0] hover:text-red-400 cursor-pointer transition-colors h-8 w-8 absolute top-2 right-2 z-40" />
            </i>

            <span className="text-lg font-bold">{item.bgrNombre}</span>
          </div>
        ))}
      </div>
      <div className="p-4 absolute bottom-2 right-2" onClick={handleAdd}>
        <Plus className="h-12 w-12 bg-teal-500 hover:bg-teal-600 transition-colors cursor-pointer rounded-full p-2 text-white" />
      </div>
    </>
  );
};

export default Biodigestor;
